import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Polygon;
} else if (mapProvider == "kld") {
    Parent = Careland.Polygon ;
}

/**
 * 此类表示一个多边形覆盖物。
 *  */
function Polygon(points, opts) {
  this.points = points;
  this.opts = opts;
  Parent.call(this, points, opts);
}

inheritPrototype(Polygon, Parent);

export default Polygon;
