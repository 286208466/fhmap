import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Circle;
} else if (mapProvider == "kld") {
    Parent = Careland.Circle ;
}

/**
 * 此类表示地图上的圆覆盖物。
 *  */
function Circle(center, radius, opts) {
  Parent.call(this, center, radius, opts);
}

inheritPrototype(Circle, Parent);

export default Circle;
