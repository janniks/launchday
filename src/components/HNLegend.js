import React, { useState } from 'react'

import { Icon } from 'antd'

const HNLegend = props => {
  const [update, setUpdate] = useState(0)
  const tick = () => {
    setUpdate(update + 1)
  }

  if (!props.reference) {
    return <Icon type="loading" />
  }

  const chart = props.reference.chartInstance
  const datasets = chart.config.data.datasets.slice(0, 25)
  const legendList = datasets.map((set, i) => {
    return (
      <li key={i} className="legendListItem">
        <div>
          <a href={set.meta.url} target="_blank" rel="noopener noreferrer">
            <span
              className={
                chart.legend.legendItems[i].hidden
                  ? 'legendHidden legendTag'
                  : 'legendTag'
              }
              style={{ backgroundColor: set.backgroundColor }}
              onClick={e => {
                e.preventDefault()
                legendClick(chart, i, tick)
              }}
            >
              {set.meta.score}
            </span>
            {set.label}
          </a>
        </div>
      </li>
    )
  })

  return (
    <div className="Legend">
      <div>
        <p className="center">
          <Icon type="info-circle" size="small" theme="filled" />{' '}
          <strong>Tip:</strong> Click on the legend colors below to hide/show
          stories in the chart.
        </p>
        <h3>Top 25 Stories</h3>
        <ol>{legendList}</ol>
      </div>
    </div>
  )
}

export default HNLegend

function legendClick(chart, index, tick) {
  let meta = chart.getDatasetMeta(index)
  meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null
  chart.update()
  tick()
}
