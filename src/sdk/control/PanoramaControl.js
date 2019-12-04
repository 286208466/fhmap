import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.PanoramaControl;
} else if (mapProvider == "kld") {
}

/**
 * 此类是负责切换至全景地图的控件，此类继承Control所有功能。
 *  */
function PanoramaControl() {
  Parent.call(this);
}

inheritPrototype(PanoramaControl, Parent);

export default PanoramaControl;
