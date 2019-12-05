import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Pixel;
} else if (mapProvider == "kld") {
  Parent = Careland.Pixel;
}

/**
 * 此类表示地图上的一点，单位为像素。
 * @params {Number} x
 * @params {Number} y
 *  */
function Pixel(x, y) {
  Parent.call(this, x, y);
}

inheritPrototype(Pixel, Parent);

/**
 * 判断坐标点是否相等，当且仅当两点的x坐标和y坐标均相等时返回true
 * @return Boolean
 *  */
Pixel.prototype._equals = function(otherPixel) {
  if (mapProvider == "baidu") {
    return this.equals(otherPixel);
  } else {
    console.error("[Pixel]不支持该地图调用此方法");
  }
};

export default Pixel;
