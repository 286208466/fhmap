function error(msg) {
  throw new Error(msg);
}

function getMapOrovider() {
  let type = "";
  if (window.BMap) {
    type = "BMap";
  }
  return type;
}

export default {
  error
};
