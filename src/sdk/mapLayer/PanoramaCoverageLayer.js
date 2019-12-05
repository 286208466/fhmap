import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.PanoramaCoverageLayer;
} else if (mapProvider == "kld") {
}

function PanoramaCoverageLayer() {
  Parent.call(this);
}

inheritPrototype(PanoramaCoverageLayer, Parent);

export default PanoramaCoverageLayer;
