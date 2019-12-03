import bdapi from "../../class/baidu/index";
import { inheritPrototype } from "../../utils/index";

let Parent = null;

if (window.BMap) {
  Parent = bdapi.MapTypeControl;
}

function MapTypeControl(options) {
  Parent.call(this, options);
}

inheritPrototype(MapTypeControl, Parent);

export default MapTypeControl;
