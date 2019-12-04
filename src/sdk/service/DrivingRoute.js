import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.DrivingRoute;
} else if (mapProvider == "kld") {
    Parent = Careland.DrivingRoute;
}

function DrivingRoute(location, opts) {
  Parent.call(this, location, opts);
}

inheritPrototype(DrivingRoute, Parent);

export default DrivingRoute;
