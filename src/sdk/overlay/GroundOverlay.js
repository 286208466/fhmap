import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.GroundOverlay;
} else if (mapProvider == "kld") {
}

function GroundOverlay(bounds, opts) {
  Parent.call(this, bounds, opts);
}

inheritPrototype(GroundOverlay, Parent);

export default GroundOverlay;
