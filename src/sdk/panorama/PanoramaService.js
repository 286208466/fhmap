import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.PanoramaService;
} else if (mapProvider == "kld") {
}

function PanoramaService() {
  Parent.call(this);
}

inheritPrototype(PanoramaService, Parent);

export default PanoramaService;
