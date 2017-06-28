function findFlagValue(cl, flag) {
  var valIndex = cl.map(function (item, index) {
    if (item.includes(flag)) return index;
  }).filter(item => item).join('') || 1;
  var value = cl[valIndex].slice(flag.length + 1);
  if (value.includes('/')) return false;
  return value;
}
function findFlag(cl, flag) {
  var result = cl.filter((item, index) => {
    return item === flag;
  });
  return result.length > 0;
}

module.exports = {
  findFlagValue,
  findFlag
};
