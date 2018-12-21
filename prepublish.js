const tempy = require('tempy');
const bundle = require('./bundle');
const cp = require('child_process');
const path = require('path');
const fs = require('fs');
const os = require('os');


// Global variables.
const ORG = 'extra-integer';
const STDIO = [0, 1, 2];
const EOL = os.EOL;




// Execute child process, return promise.
function cpExec(cmd, o) {
  var o = o||{}, stdio = o.log? o.stdio||STDIO:o.stdio||[];
  if(o.log) console.log('-cpExec:', cmd);
  if(o.stdio==null) return Promise.resolve({stdout: cp.execSync(cmd, {stdio})});
  return new Promise((fres, frej) => cp.exec(cmd, {stdio}, (err, stdout, stderr) => {
    return err? frej(err):fres({stdout, stderr});
  }));
};


// Get requires from code.
function pkgRequires(pth, z=[]) {
  var dat = fs.readFileSync(pth, 'utf8');
  var pkgs = [], re = /require\(\'(.*?)\'\)/g;
  for(var m=null; (m=re.exec(dat))!=null;)
  { pkgs.push(m[1]); z.push(m[1]); }
  if(pkgs.length===0) return z;
  var dir = path.dirname(pth);
  for(var p of pkgs)
    if(/^\./.test(p)) pkgRequires(path.join(dir, p), z);
  return z;
};

// Update package information.
function pkgUpdate(pkg, o) {
  var p = pkg;
  p.name = `@${o.org}/${o.name}`;
  p.description = o.readme.replace(/\r?\n[\s\S]*/, '').replace(/[\_\*\[\]]/g, '');
  p.main = o.main||'index.js';
  p.scripts = {test: 'exit'};
  p.keywords.push(o.name);
  for(var d of Object.keys(p.dependencies||[]))
    if(!o.requires.includes(d)) p.dependencies[d] = undefined;
  p.devDependencies = undefined;
  return p;
};

// Scatter a file to package.
async function pkgScatter(pth, o) {
  var name = path.basename(pth);
  name = name.substring(0, name.length-path.extname(name).length);
  var pre = pth.substring(0, pth.length-path.extname(pth).length);
  var license = fs.readFileSync('LICENSE', 'utf8');
  var readme = fs.readFileSync(pre+'.md', 'utf8');
  var index = fs.readFileSync(pth, 'utf8');
  index = index.replace(new RegExp(`less (.*?)${name}.md`, 'g'), `less $1README.md`);
  var main = 'index'+path.extname(pth);
  var requires = pkgRequires(pth);
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  pkgUpdate(pkg, Object.assign({name, license, readme, index, main, requires}, o));
  var dir = tempy.directory();
  for(var r of requires) {
    if(!/^[\.\/]/.test(r)) continue;
    var src = path.join(path.dirname(pth), r);
    var dst = path.join(dir, r);
    fs.copyFileSync(src, dst);
  }
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
  fs.writeFileSync(path.join(dir, 'LICENSE'), license);
  fs.writeFileSync(path.join(dir, 'README.md'), readme);
  fs.writeFileSync(path.join(dir, main), index);
  await cpExec('npm publish', {cwd: dir, log: true});
  await cpExec(`rm -rf ${dir}`, {log: true});
};

async function pkgMinify(o) {
  cp.execSync('npm run browserify', {stdio: STDIO});
  cp.execSync('npm run uglifyjs', {stdio: STDIO});
  var pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  var license = fs.readFileSync('LICENSE', 'utf8');
  var readme = fs.readFileSync('README.md', 'utf8');
  var index = fs.readFileSync('index.min.js', 'utf8');
  readme = readme.replace(/(\.<br>)/, ', exported as `Integer`$1');
  readme = readme.replace(/(\.<br>)[\s\S]*?(\[!\[nodef\])/, `$1Original module: [extra-integer].${EOL}<br>${EOL}${EOL}$2`);
  readme = readme.replace(/extra-integer\.min/g, 'extra-integer');
  pkg.name += '.min';
  pkg.description = pkg.description.replace('.$', ' (browserified, minifined).');
  pkg.scripts = {test: 'exit'};
  pkg.devDependencies = undefined;
  fs.unlinkSync('index.web.js');
  fs.unlinkSync('index.min.js');
  var dir = tempy.directory();
  fs.writeFileSync(path.join(dir, 'index.js'), index);
  fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify(pkg, null, 2));
  fs.writeFileSync(path.join(dir, 'LICENSE'), license);
  fs.writeFileSync(path.join(dir, 'README.md'), readme);
  await cpExec('npm publish', {cwd: dir, log: true});
  await cpExec(`rm -rf ${dir}`, {log: true});
};

// Run on shell.
async function shell(a) {
  var o = {org: ORG};
  for(var f of fs.readdirSync('scripts'))
    if(f!=='index.js' && path.extname(f)==='.js') pkgScatter('scripts/'+f, o);
  var out = await bundle('scripts/index.js');
  fs.writeFileSync('index.js', out);
  pkgMinify();
};
if(require.main===module) shell(process.argv);
