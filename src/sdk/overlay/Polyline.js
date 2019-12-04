import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Polyline;
} else if (mapProvider == "kld") {
    Parent = Careland.Polyline ;
}

/**
 * 使用浏览器的矢量制图工具（如果可用）在地图上绘制折线的地图叠加层。
 *  */
function Polyline(points, opts) {
  Parent.call(this, points, opts);
}

inheritPrototype(Polyline, Parent);

export default Polyline;
