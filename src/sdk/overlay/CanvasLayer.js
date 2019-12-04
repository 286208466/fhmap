import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.CanvasLayer;
} else if (mapProvider == "kld") {
}

function CanvasLayer(opts) {
  Parent.call(this, opts);
}

inheritPrototype(CanvasLayer, Parent);

export default CanvasLayer;
