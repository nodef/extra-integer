function abs(a) {
  var m = a>>31;
  return (a+m)^m;
};
module.exports = abs;
