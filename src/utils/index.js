function error(msg) {
  throw new Error(msg);
}

function getMapProvider() {
  let type = "";
  if (window.BMap) {
    type = "BMap";
  }
  return type;
}

/**
 * 寄生组合继承
 *  */
function inheritPrototype(son, father) {
  var prototype = Object.create(father.prototype);
  son.prototype = prototype;
  prototype.constructor = son;
}

export default {
  error,
  inheritPrototype
};
