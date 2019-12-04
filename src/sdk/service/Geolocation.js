import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Geolocation;
} else if (mapProvider == "kld") {
    Parent = Careland.Geolocation;
}

function Geolocation() {
  Parent.call(this);
}

inheritPrototype(Geolocation, Parent);

export default Geolocation;
