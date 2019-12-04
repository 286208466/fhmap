import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Icon;
} else if (mapProvider == "kld") {
}

/**
 * 此类表示标注覆盖物所使用的图标。
 *  */
function Icon(url, size, opts) {
  Parent.call(this, url, size, opts);
}

inheritPrototype(Icon, Parent);

export default Icon;
