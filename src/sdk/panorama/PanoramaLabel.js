import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.PanoramaLabel;
} else if (mapProvider == "kld") {
}

function PanoramaLabel(content, opts) {
  Parent.call(this, content, opts);
}

inheritPrototype(PanoramaLabel, Parent);

export default PanoramaLabel;
