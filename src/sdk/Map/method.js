import bdMap from "./baidu/Map";

/**
 * 启用地图拖拽，默认启用
 *  */
function enableDragging(mapId) {
  if (window.BMap) {
    bdMap.enableDragging(mapId);
  } else {
    utils.error("[Map][enableDragging][不支持]");
  }
}

/**
 * 禁用地图拖拽
 *  */
function disableDragging(mapId) {
  if (window.BMap) {
    bdMap.disableDragging(mapId);
  } else {
    utils.error("[Map][disableDragging][不支持]");
  }
}

function enableScrollWheelZoom() {}

function disableScrollWheelZoom() {}

function enableDoubleClickZoom() {}

function disableDoubleClickZoom() {}

function enableKeyboard() {}

function disableKeyboard() {}

function enableInertialDragging() {}

function disableInertialDragging() {}

function enableContinuousZoom() {}

function disableContinuousZoom() {}

function enablePinchToZoom() {}

function disablePinchToZoom() {}

function enableAutoResize() {}

function disableAutoResize() {}

function setDefaultCursor() {}

function getDefaultCursor() {}

function setDraggingCursor() {}

function getDraggingCursor() {}

function setMinZoom() {}

function setMaxZoom() {}

function setMapStyle() {}

function setMapStyleV2() {}

function setPanorama() {}

function getBounds() {}

function getCenter() {}

function getDistance() {}

function getMapType() {}

function getSize() {}

function getViewport() {}

function getZoom() {}

function getPanorama() {}

function centerAndZoom() {}

function panTo() {}

function panBy() {}

function reset() {}

function setCenter() {}

function setCurrentCity() {}

function setMapType() {}

function setViewport() {}

function setZoom() {}

function highResolutionEnabled() {}

function zoomIn() {}

function zoomOut() {}

function addHotspot() {}

function removeHotspot() {}

function clearHotspots() {}

function addControl() {}

function removeControl() {}

function getContainer() {}

function addContextMenu() {}

function removeContextMenu() {}

function addOverlay() {}

function removeOverlay() {}

function clearOverlays() {}

function openInfoWindow() {}

function closeInfoWindow() {}

function pointToOverlayPixel() {}

function overlayPixelToPoint() {}

function getInfoWindow() {}

function getOverlays() {}

function getPanes() {}

function addTileLayer() {}

function removeTileLayer() {}

function getTileLayer() {}

function pixelToPoint() {}

function pointToPixel() {}

export default {
  enableDragging,
  disableDragging,
  enableScrollWheelZoom,
  disableScrollWheelZoom,
  enableDoubleClickZoom,
  disableDoubleClickZoom,
  enableKeyboard,
  disableKeyboard,
  enableInertialDragging,
  disableInertialDragging,
  enableContinuousZoom,
  disableContinuousZoom,
  enablePinchToZoom,
  disablePinchToZoom,
  enableAutoResize,
  disableAutoResize,
  setDefaultCursor,
  getDefaultCursor,
  setDraggingCursor,
  getDraggingCursor,
  setMinZoom,
  setMaxZoom,
  setMapStyle,
  setMapStyleV2,
  setPanorama,
  getBounds,
  getCenter,
  getDistance,
  getMapType,
  getSize,
  getViewport,
  getZoom,
  getPanorama,
  centerAndZoom,
  panTo,
  panBy,
  reset,
  setCenter,
  setCurrentCity,
  setMapType,
  setViewport,
  setZoom,
  highResolutionEnabled,
  zoomIn,
  zoomOut,
  addHotspot,
  removeHotspot,
  clearHotspots,
  addControl,
  removeControl,
  getContainer,
  addContextMenu,
  removeContextMenu,
  addOverlay,
  removeOverlay,
  clearOverlays,
  openInfoWindow,
  closeInfoWindow,
  pointToOverlayPixel,
  overlayPixelToPoint,
  getInfoWindow,
  getOverlays,
  getPanes,
  addTileLayer,
  removeTileLayer,
  getTileLayer,
  pixelToPoint,
  pointToPixel
};
