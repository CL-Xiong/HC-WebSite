<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>

<script>
/* eslint-disable */
import * as esriLoader from 'esri-loader'

esriLoader.loadModules(['esri/views/MapView', 'esri/WebMap'])
.then(([MapView, WebMap]) => {
  // then we load a web map from an id
  let webmap = new WebMap({
    portalItem: {id: 'f2e9b762544945f390ca4ac3671cfa72'}
    })
    let view = new MapView({
    map: webmap,
    container: 'viewDiv'
  });
})
.catch(err => {
  // handle any errors
  console.error(err);
});

export default {
}
</script>
<style scoped>
  @import url('https://js.arcgis.com/4.4/esri/themes/light/main.css');
  #viewDiv {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
