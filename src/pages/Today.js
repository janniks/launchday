import React, { useState, useEffect } from 'react'

import { Card, Icon, Result } from 'antd'
import { defaults, Line } from 'react-chartjs-2'
import moment from 'moment-timezone'

import DataService from 'services/DataService'

const timezoneOffset = moment().utcOffset() / 60

defaults.global.defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"

defaults.global.legend.display = false

const chartHeight = Math.max(400, window.innerHeight / 1.5)

const Today = () => {
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('Fetching data...')
  const [datasets, setDatasets] = useState(false)

  useEffect(() => {
    DataService.getToday({ setDatasets, setStatus, setError })
  }, [])

  if (error) {
    return <Result status="warning" title="Error" subTitle={error} />
  }

  if (!datasets) {
    return (
      <div>
        <Icon type="loading" /> {status}
      </div>
    )
  }

  return (
    <div>
      <Card title="Today's Products">
        <div>
          <Line
            data={{ datasets: datasets.voteDataset }}
            height={chartHeight}
            options={{
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
              legendCallback: function(chart) {
                return '<div>this is my legend</div>'
              },
              tooltips: {
                callbacks: {
                  label: function(tooltipItem, data) {
                    return ` ${data.datasets[tooltipItem.datasetIndex].label}`
                  },
                  labelColor: function(tooltipItem, chart) {
                    const color =
                      chart.config.data.datasets[tooltipItem.datasetIndex]
                        .backgroundColor
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
                    return `${tooltipItems[0].yLabel} votes - ${time}`
                  }
                }
              }
            }}
          />
        </div>
      </Card>
    </div>
  )
}

export default Today
