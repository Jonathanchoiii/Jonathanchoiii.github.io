// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main2'), 'westeros');

// 指定图表的配置项和数据
var option = {
  title: {
    text: '人们为什么会选择便利店的前十大原因',
    subtext: '数据源：便利店业态发展研究，德勤研究',
    left: 'center'
  },

  color: [],
  tooltip: {
    trigger: 'axis',
    axisPointer: { // 坐标轴指示器，坐标轴触发有效
      type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '3%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [{
    type: 'category',
    data: ['距离近', '营业时间长', '去习惯了', '店内卫生', '商品丰富', '食品安全', '东西好吃', '有新商品', '可当场食用', '店员服务好'],
    axisTick: {
      alignWithLabel: true

    }
  }],
  yAxis: [{
    name: '百分比',
    type: 'value'
  }],
  series: [{
    name: '百分比',
    type: 'bar',
    barWidth: '60%',
    data: [80, 59, 38, 27, 26, 23, 21, 16, 17, 13]
  }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);