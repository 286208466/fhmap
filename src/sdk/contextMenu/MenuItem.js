import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.MenuItem;
} else if (mapProvider == "kld") {
  Parent = Careland.MenuItem;
}

function MenuItem(text, callback, opts) {
  Parent.call(this, text, callback, opts);
}

inheritPrototype(MenuItem, Parent);

export default MenuItem;
