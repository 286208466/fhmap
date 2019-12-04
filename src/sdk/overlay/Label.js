import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Label;
} else if (mapProvider == "kld") {
}

/**
 * 此类表示地图上的文本标注。
 *  */
function Label(content, opts) {
  Parent.call(this, content, opts);
}

inheritPrototype(Label, Parent);

export default Label;
