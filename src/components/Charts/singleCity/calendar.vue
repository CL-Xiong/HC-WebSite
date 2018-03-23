<template>
  <div :class="className" :id="id" :style="{height:height,width:width}"></div>
</template>


<script>
import echarts from 'echarts'
import resize from '../mixins/resize'
export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate((+year + 1) + '-01-01');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time < end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 1000)
        ]);
    }
    return data;
}



var option = {
    tooltip: {
        position: 'top'
    },
    visualMap: {
        min: 0,
        max: 1000,
        calculable: true,
        orient: 'horizontal',
        left: 'center',
        top: 'top'
    },

    calendar: [
    {
        range: '2017',
        cellSize: ['auto', 20]
    },
    {
        top: 260,
        range: '2016',
        cellSize: ['auto', 20]
    },
    {
        top: 450,
        range: '2015',
        cellSize: ['auto', 20],
        right: 5
    }],

    series: [{
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 0,
        data: getVirtulData(2017)
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 1,
        data: getVirtulData(2016)
    }, {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        calendarIndex: 2,
        data: getVirtulData(2015)
    }]

};

 this.chart.setOption(option, true);
    }
  }
}
</script>
