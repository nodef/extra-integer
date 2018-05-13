const package = require('./package.json');
const fs = require('fs');
const os = require('os');

var names = [], z = '';
for(var dep in package.devDependencies) {
  var fil = require.resolve(dep);
  var txt = fs.readFileSync(fil, 'utf8');
  names.push(txt.match(/module\.exports\s*=\s*(\w+)/)[1]);
  z += txt.replace(/.*require\(.*/g, '').replace(/module\.exports.*/g, '').trim()+os.EOL;
}
for(var nam of names)
  z += `exports.${nam} = ${nam};${os.EOL}`;
fs.writeFileSync('index.js', z);
