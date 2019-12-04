import { getMapProvider, inheritPrototype } from "../../utils";

let Parent = null;
let mapProvider = getMapProvider();
if (mapProvider == "baidu") {
  Parent = BMap.PointCollection;
} else if (mapProvider == "kld") {
}

function PointCollection(points, opts) {
  Parent.call(this, points, opts);
}

inheritPrototype(PointCollection, Parent);

export default PointCollection;
