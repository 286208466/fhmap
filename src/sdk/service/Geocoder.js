import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Geocoder;
} else if (mapProvider == "kld") {
    Parent = Careland.Geocoder;
}

function Geocoder() {
  Parent.call(this);
}

inheritPrototype(Geocoder, Parent);

export default Geocoder;
