import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.InfoWindow;
} else if (mapProvider == "kld") {
    Parent = Careland.InfoWindow;
}

/**
 * 此类表示地图上包含信息的窗口。
 *  */
function InfoWindow(content, opts) {
  Parent.call(this, content, opts);
}

inheritPrototype(InfoWindow, Parent);

export default InfoWindow;
