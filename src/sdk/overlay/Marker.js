import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Marker;
} else if (mapProvider == "kld") {
    Parent = Careland.Marker;
}

/**
 * 此类表示地图上一个图像标注。
 *  */
function Marker(point, opts) {
  Parent.call(this, point, opts);
}

inheritPrototype(Marker, Parent);

export default Marker;
