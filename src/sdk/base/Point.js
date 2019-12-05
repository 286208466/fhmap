import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Point;
} else if (mapProvider == "kld") {
  Parent = Careland.GbPoint;
}

/**
 * 此类表示一个地理坐标点。
 * @params  {Number}    lng
 * @params  {Number}    lat
 *  */
function Point(lng, lat) {
  if (mapProvider == "baidu") {
    Parent.call(this, lng, lat);
  } else if (mapProvider == "kld") {
    Parent.call(this, lat, lng);
  }
}

inheritPrototype(Point, Parent);

/**
 * 判断坐标点是否相等，当且仅当两点的经度和纬度均相等时返回true
 * @return Boolean
 *  */
Point.prototype._equals = function(otherPoint) {
  if (mapProvider == "baidu") {
    return this.equals(otherPoint);
  } else {
    console.error("[Point]不支持该地图调用此方法");
  }
};

export default Point;
