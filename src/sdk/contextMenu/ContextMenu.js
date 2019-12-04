import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.ContextMenu;
} else if (mapProvider == "kld") {
    Parent = Careland.ContextMenu;
}

function ContextMenu() {
  Parent.call(this);
}

inheritPrototype(ContextMenu, Parent);

export default ContextMenu;
