var camelcase = require('camelcase');
function isArray(item) {
  return Array.isArray ? Array.isArray(item) : Object.prototype.toString.call(item) === '[object Array]';
}

function isObject(item) {
  return Object.prototype.toString.call(item) === '[object Object]';
}

module.exports = function camelcasify(item) {
  if (!isObject(item) && !isArray(item)) return item;

  if (isArray(item)) {
    return item.map(function (val) {
      return camelcasify(val);
    })
  }

  if (isObject(item)) {

    return Object.keys(item).reduce(function (pre, key) {
      var val = item[key];

      pre[camelcase(key)] = camelcasify(val);
      return pre;
    }, {})
  }
};
