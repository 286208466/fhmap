import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.CustomLayer;
} else if (mapProvider == "kld") {
}

function CustomLayer(opts) {
  Parent.call(this, opts);
}

inheritPrototype(CustomLayer, Parent);

export default CustomLayer;
