import React, { useState } from 'react'

import { defaults, Line } from 'react-chartjs-2'

import Legend from 'components/Legend'
import getChartOptions from 'lib/chartOptions'

defaults.global.defaultFontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
defaults.global.legend.display = false

const chartHeight = Math.max(400, window.innerHeight / 2)

const Chart = props => {
  const [chartReference, setChartReference] = useState(null)

  return (
    <div className="Chart">
      <div>
        <Line
          data={{ datasets: props.datasets }}
          height={chartHeight}
          options={getChartOptions(props.chartType)}
          ref={reference => setChartReference(reference)}
        />
      </div>
      <Legend reference={chartReference} />
    </div>
  )
}

export default Chart
