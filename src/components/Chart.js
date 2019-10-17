import React, { useState } from 'react'

import { Card, Icon } from 'antd'
import { defaults, Line } from 'react-chartjs-2'

import Legend from 'components/Legend'
import chartOptions from 'lib/chartOptions'

defaults.global.defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
defaults.global.legend.display = false

const chartHeight = Math.max(400, window.innerHeight / 2)

const Chart = props => {
  const [chartReference, setChartReference] = useState(null)

  if (!props.datasets) {
    return (
      <div className="Status center">
        <Icon type="loading" size="large" /> {props.status}
      </div>
    )
  }

  const datasets = props.datasets.voteDataset

  return (
    <Card title="Today's Products">
      <div>
        <Line
          data={{ datasets }}
          height={chartHeight}
          options={chartOptions}
          ref={reference => setChartReference(reference)}
        />
      </div>
      <Legend reference={chartReference} />
    </Card>
  )
}

export default Chart
