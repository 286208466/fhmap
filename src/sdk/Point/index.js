/**
 * 此类表示一个地理坐标点。
 * 以指定的经度和纬度创建一个地理点坐标
 *  */
function Point(lng, lat) {
  if (window.BMap) {
    return BMap.Point(lng, lat);
  } else {
    console.error("该类或方法暂不支持");
  }
}

/**
 * 此类表示地图上的一点，单位为像素。
 * 创建像素点对象实例。像素坐标的坐标原点为地图区域的左上角
 *  */
function Pixel(x, y) {
  if (window.BMap) {
    return BMap.Pixel(x, y);
  } else {
    console.error("该类或方法暂不支持");
  }
}

/**
 * 此类表示地理坐标的矩形区域。
 * 创建一个包含所有给定点坐标的矩形区域。其中sw表示矩形区域的西南角，参数ne表示矩形区域的东北角
 *  */
function Bounds(sw, ne) {
  if (window.BMap) {
    return BMap.Bounds(sw, ne);
  } else {
    console.error("该类或方法暂不支持");
  }
}

/**
 * 此类以像素表示一个矩形区域的大小。
 * 以指定的宽度和高度创建一个矩形区域大小对象
 *  */
function Size(width, height) {
  if (window.BMap) {
    return BMap.Size(width, height);
  } else {
    console.error("该类或方法暂不支持");
  }
}
export default {
  Point,
  Pixel,
  Bounds,
  Size
};
