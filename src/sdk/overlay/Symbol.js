import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Symbol;
} else if (mapProvider == "kld") {
}

function _Symbol(path, opts) {
  this.path = path;
  this.opts = opts;
  Parent.call(this, path, opts);
}

inheritPrototype(_Symbol, Parent);

export default _Symbol;
