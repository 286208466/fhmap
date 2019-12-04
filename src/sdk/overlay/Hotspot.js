import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Hotspot;
} else if (mapProvider == "kld") {
  Parent = Careland.Hotspot;
}

function Hotspot(position, opts) {
  Parent.call(this, position, opts);
}

inheritPrototype(Hotspot, Parent);

export default Hotspot;
