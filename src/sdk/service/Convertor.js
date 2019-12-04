import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Convertor;
} else if (mapProvider == "kld") {
}

function Convertor() {
  Parent.call(this);
}

inheritPrototype(Convertor, Parent);

export default Convertor;
