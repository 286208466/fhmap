import bdapi from "../../class/baidu/index";
import { inheritPrototype } from "../../utils/index";

let Parent = null;

if (window.BMap) {
  Parent = bdapi.Bounds;
}

function Bounds(sw, ne) {
  this.sw = sw;
  this.ne = ne;
  Parent.call(this, sw, ne);
}

inheritPrototype(Bounds, Parent);

export default Bounds;
