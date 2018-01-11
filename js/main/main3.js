var myChart = echarts.init(document.getElementById('main3'), 'westeros');
option = {
  title: {
    text: '中国十大便利店品牌',
    subtext: '数据源：CCFA'
  },

  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b}: {c} ({d}%)"
  },
  legend: {
    orient: 'vertical',
    x: 'right',
    data: ['7-Eleven', '全家FamilyMart', '快客便利店', '天福', '好德-可的Kedi', '上好便利店', '喜士多C-store', '红旗连锁', '美宜佳MEIYIJIA', 'LAWSON罗森']
  },
  series: [{
    name: '排名不分先后',
    type: 'pie',
    radius: ['50%', '70%'],
    avoidLabelOverlap: false,
    label: {
      normal: {
        show: false,
        position: 'center'
      },
      emphasis: {
        show: true,
        textStyle: {
          fontSize: '20',
          fontWeight: 'bold'
        }
      }
    },
    labelLine: {
      normal: {
        show: false
      }
    },
    data: [{
      value: 10,
      name: '7-Eleven'
    }, {
      value: 10,
      name: '全家FamilyMart'
    }, {
      value: 10,
      name: '快客便利店'
    }, {
      value: 10,
      name: '天福'
    }, {
      value: 10,
      name: '好德-可的kedi'
    }, {
      value: 10,
      name: '上好便利店'
    }, {
      value: 10,
      name: '喜士多C-store'
    }, {
      value: 10,
      name: '红旗连锁'
    }, {
      value: 10,
      name: '美宜佳MEIYIJIA'
    }, {
      value: 10,
      name: 'LAWSON罗森'
    }]
  }]
};
myChart.setOption(option);