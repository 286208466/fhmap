import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.BusLineSearch;
} else if (mapProvider == "kld") {
}

function BusLineSearch(location, options) {
  Parent.call(this, location, options);
}

inheritPrototype(BusLineSearch, Parent);

export default BusLineSearch;
