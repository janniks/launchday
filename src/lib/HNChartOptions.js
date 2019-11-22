import moment from 'moment'

const HNChartOptions = {
  scales: {
    xAxes: [
      {
        type: 'time'
      }
    ],
    yAxes: [
      {
        /* keep default axes */
      },
      {
        position: 'right',
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          drawTicks: false
        }
      }
    ]
  },
  hover: {
    mode: 'nearest',
    intersect: false,
    animationDuration: 0
  },
  elements: {
    point: {
      radius: 0
    }
  },
  animation: {
    duration: 0
  },
  responsiveAnimationDuration: 0,
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    callbacks: {
      label: function(tooltipItem, data) {
        return ` ${data.datasets[tooltipItem.datasetIndex].label}`
      },
      labelColor: function(tooltipItem, chart) {
        const color =
          chart.config.data.datasets[tooltipItem.datasetIndex].backgroundColor
        return {
          borderColor: color,
          backgroundColor: color
        }
      },
      title: function(tooltipItems) {
        const time = moment(tooltipItems[0].label).format('hh:mm A')
        return `${tooltipItems[0].yLabel} points - ${time}`
      }
    }
  },
  onClick: function(e, posts) {
    const post = posts[0]
    const meta = post._chart.config.data.datasets[post._datasetIndex].meta
    window.open(meta.url, '_blank')
  }
}

export default HNChartOptions
