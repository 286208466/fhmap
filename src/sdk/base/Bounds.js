import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Bounds;
} else if (mapProvider == "kld") {
  Parent = Careland.Bounds;
}

/**
 * 此类表示地理坐标的矩形区域。
 * @params {Point}  sw
 * @params {Point}  ne
 *  */
function Bounds(sw, ne) {
  Parent.call(this, sw, ne);
}

inheritPrototype(Bounds, Parent);

/**
 * 当且仅当此矩形中的两点参数都等于其他矩形的两点参数时，返回true
 * @params {Bounds} otherBounds
 * @return Boolean
 *  */
Bounds.prototype._equals = function(otherBounds) {
  if (mapProvider == "baidu") {
    return this.equals(otherBounds);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 如果点的地理坐标位于此矩形内，则返回true
 * @params {Point}   point
 * @return Boolean
 *  */
Bounds.prototype._containsPoint = function(point) {
  if (mapProvider == "baidu") {
    return this.containsPoint(point);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 传入的矩形区域完全包含于此矩形区域中，则返回true
 * @params {Bounds}   otherBounds
 * @return Boolean
 *  */
Bounds.prototype._containsBounds = function(otherBounds) {
  if (mapProvider == "baidu") {
    return this.containsBounds(otherBounds);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 计算与另一矩形的交集区域
 * @params {Bounds}   otherBounds
 * @return Bounds
 *  */
Bounds.prototype._intersects = function(otherBounds) {
  if (mapProvider == "baidu") {
    return this.intersects(otherBounds);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 放大此矩形，使其包含给定的点
 * @params {Point}   point
 *  */
Bounds.prototype._extend = function(point) {
  if (mapProvider == "baidu") {
    return this.extend(point);
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 返回矩形的中心点
 * @return Point
 *  */
Bounds.prototype._getCenter = function() {
  if (mapProvider == "baidu") {
    return this.getCenter();
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 如果矩形为空，则返回true
 * @return Boolean
 *  */
Bounds.prototype._isEmpty = function() {
  if (mapProvider == "baidu") {
    return this.isEmpty();
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 返回矩形区域的西南角
 * @return Point
 *  */
Bounds.prototype._getSouthWest = function() {
  if (mapProvider == "baidu") {
    return this.getSouthWest();
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 返回矩形区域的东北角
 * @return Point
 *  */
Bounds.prototype._getNorthEast = function() {
  if (mapProvider == "baidu") {
    return this.getNorthEast();
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

/**
 * 返回矩形区域的跨度
 * @return Point
 *  */
Bounds.prototype._toSpan = function() {
  if (mapProvider == "baidu") {
    return this.toSpan();
  } else {
    console.error("[Bounds]不支持该地图调用此方法");
  }
};

export default Bounds;
