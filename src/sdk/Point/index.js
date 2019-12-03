import bdapi from "../../class/baidu/index";
import { inheritPrototype } from "../../utils/index";

let Parent = null;

if (window.BMap) {
  Parent = bdapi.Point;
}

function Point(lng, lat) {
  this.lng = lng;
  this.lat = lat;
  Parent.call(this, lng, lat);
}

inheritPrototype(Point, Parent);

export default Point;
