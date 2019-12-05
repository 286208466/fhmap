import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.TileLayer;
} else if (mapProvider == "kld") {
  Parent = Careland.Layer;
}

function TileLayer(opts) {
  Parent.call(this, opts);
}

inheritPrototype(TileLayer, Parent);

export default TileLayer;
