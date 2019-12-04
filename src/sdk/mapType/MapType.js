import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.MapType;
} else if (mapProvider == "kld") {
}

function MapType(name, layers, opts) {
  Parent.call(this, name, layers, opts);
}

inheritPrototype(MapType, Parent);

export default MapType;
