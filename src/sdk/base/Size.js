import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Size;
} else if (mapProvider == "kld") {
  Parent = Careland.Size;
}

/**
 * 此类以像素表示一个矩形区域的大小。
 * @params {Number} width   水平方向的数值
 * @params {Number} height  竖直方向的数值
 *  */
function Size(width, height) {
  Parent.call(this, width, height);
}

inheritPrototype(Size, Parent);

/**
 * 当且仅当此矩形中的宽度和高度都等于其他矩形的宽度和高度时，返回true
 * @params {Size}   otherSize   
 * @return Boolean
 *  */
Size.prototype._equals = function(otherSize) {
  if (mapProvider == "baidu") {
    return this.equals(otherSize);
  } else {
    console.error("[Size]不支持该地图调用此方法");
  }
};

export default Size;
