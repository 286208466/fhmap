import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.TransitRoute;
} else if (mapProvider == "kld") {
    Parent = Careland.TransitRoute;
}

function TransitRoute(location, opts) {
  Parent.call(this, location, opts);
}

inheritPrototype(TransitRoute, Parent);

export default TransitRoute;
