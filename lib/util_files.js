module.exports = {
  gitignore: `node_modules/
  npm-debug.log
  `,
  findFlagValue: function(cl, flag) {
    var valIndex = cl.map(function(item, index) {
      if(item.includes(flag)) return index
    }).filter(item => item).join('') || 1;
    var value = cl[valIndex].slice(flag.length + 1);
    if(value.includes('/')) return false;
    return value;
  }

}
