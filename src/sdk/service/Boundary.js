import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.Boundary;
} else if (mapProvider == "kld") {
  Parent = Careland.Boundary;
}

function Boundary() {
  Parent.call(this);
}

inheritPrototype(Boundary, Parent);

export default Boundary;
