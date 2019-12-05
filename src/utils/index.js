function error(msg) {
  throw new Error(msg);
}

/**
 * 获取地图厂商
 *  */
function getMapProvider() {
  let type = "";
  if (window.BMap) {
    type = "baidu";
  } else if (window.Careland) {
    type = "kld";
  }
  return type;
}

/**
 * 寄生组合继承
 *  */
function inheritPrototype(son, father) {
  if (son && father) {
    var prototype = Object.create(father.prototype);
    son.prototype = prototype;
    prototype.constructor = son;
  } else {
    console.error("son or father is undefined");
    console.log("son", son);
    console.log("father", father);
  }
}

export default {
  error,
  getMapProvider,
  inheritPrototype
};
