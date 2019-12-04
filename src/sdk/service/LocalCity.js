import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.LocalCity;
} else if (mapProvider == "kld") {
    Parent = Careland.LocalCity;
}

function LocalCity(opts) {
  Parent.call(this, opts);
}

inheritPrototype(LocalCity, Parent);

export default LocalCity;
