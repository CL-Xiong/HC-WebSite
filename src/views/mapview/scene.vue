<template>
  <div class="main-container">
    <ArcGISMap style="float:left;margin-left:100px;" title="Map"></ArcGISMap>
  </div>
</template>
<script>
import ArcGISMap from '@/components/ArcGIS/map'

export default {
  name: 'arcgisscene',
  components: { ArcGISMap }
}
</script>
