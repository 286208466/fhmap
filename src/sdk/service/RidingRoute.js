import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.RidingRoute;
} else if (mapProvider == "kld") {
}

function RidingRoute(location, opts) {
  Parent.call(this, location, opts);
}

inheritPrototype(RidingRoute, Parent);

export default RidingRoute;
