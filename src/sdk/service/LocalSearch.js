import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.LocalSearch;
} else if (mapProvider == "kld") {
    Parent = Careland.LocalSearch;
}

function LocalSearch(location, opts) {
  Parent.call(this, location, opts);
}

inheritPrototype(LocalSearch, Parent);

export default LocalSearch;
