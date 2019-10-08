import React, { useState, useEffect } from 'react'

import { Icon, Result } from 'antd'
import { Line } from 'react-chartjs-2'
import moment from 'moment-timezone'

import ApiService from 'services/TodoService'

const Today = () => {
  const [error, setError] = useState(false)
  const [datasets, setDatasets] = useState(false)

  useEffect(() => {
    ApiService.getToday({ setDatasets, setError })
  }, [])

  if (error) {
    return <Result status="warning" title="Error" subTitle={error} />
  }

  if (!datasets) {
    return (
      <div>
        <Icon type="loading" /> Loading...
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
                      .utcOffset(0, true)
                }
                // position: 'bottom'
              }
            ]
          },
          hover: {
            mode: 'nearest',
            intersect: false,
            animationDuration: 0
          },
          elements: {
            line: {
              // tension: 0 // disables bezier curves
            },
            point: {
              radius: 0
            }
          },
          animation: {
            duration: 0 // general animation time
          },
          responsiveAnimationDuration: 0,
          maintainAspectRatio: false,
          tooltips: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.yLabel} votes`
              }
            }
          }
        }}
      />
    </div>
  )
}

export default Today
