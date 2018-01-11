// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main1'), 'westeros');

// 指定图表的配置项和数据
var option = option = {
  title: {
    text: '近年来零售业业态增速对比图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['便利店行业', '超市', '百货',]
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: '便利店行业',
      type: 'line',
      stack: '',
      data: [14.7, 15.7, 12.5, 10, 10.3, 12.5, 11]
    },
    {
      name: '超市',
      type: 'line',
      stack: '',
      data: [12, 11, 10.1, 7.5, 6, 5.7, 5.3]
    },
    {
      name: '百货',
      type: 'line',
      stack: '',
      data: [17.5, 15.7, 9, 6, 1, -0.3, -1]
    },

  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);