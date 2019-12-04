import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Autocomplete;
} else if (mapProvider == "kld") {
    Parent = Careland.Autocomplete;
}

function Autocomplete(options) {
  Parent.call(this, options);
}

inheritPrototype(Autocomplete, Parent);

export default Autocomplete;
