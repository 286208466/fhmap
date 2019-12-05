import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.TrafficLayer;
} else if (mapProvider == "kld") {
}

function TrafficLayer(opts) {
  Parent.call(this, opts);
}

inheritPrototype(TrafficLayer, Parent);

export default TrafficLayer;
