import moment from 'moment-timezone'

const timezoneOffset = moment().utcOffset() / 60

const getChartOptions = type => ({
  scales: {
    xAxes: [
      {
        type: 'time',
        time: {
          parser: t =>
            moment(t)
              .tz('America/Los_Angeles')
              .utcOffset(timezoneOffset, true)
        }
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
        const time = moment(tooltipItems[0].label)
          .tz('America/Los_Angeles')
          .utcOffset(0, true)
          .format('hh:mm A')
        return `${tooltipItems[0].yLabel} ${type} - ${time}`
      }
    }
  }
})

export default getChartOptions
