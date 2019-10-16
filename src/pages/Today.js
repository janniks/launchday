import React, { useState, useEffect } from 'react'

import { Icon, Result } from 'antd'
import { Line } from 'react-chartjs-2'
import moment from 'moment-timezone'

import DataService from 'services/DataService'

const timezoneOffset = moment().utcOffset() / 60

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
      <h2>Today</h2>
      <Line
        data={{ datasets: datasets.voteDataset }}
        height={1000}
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
          maintainAspectRatio: false,
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
  )
}

export default Today
