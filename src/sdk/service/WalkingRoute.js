import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.WalkingRoute;
} else if (mapProvider == "kld") {
}

function WalkingRoute(location, opts) {
  Parent.call(this, location, opts);
}

inheritPrototype(WalkingRoute, Parent);

export default WalkingRoute;
