import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.MapTypeControl;
} else if (mapProvider == "kld") {
}

/**
 * 此类是负责切换地图类型的控件，此类继承Control所有功能。
 *  */
function MapTypeControl(options) {
  Parent.call(this, options);
}

inheritPrototype(MapTypeControl, Parent);

export default MapTypeControl;
