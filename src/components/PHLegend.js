import React, { useState } from 'react'

import { Button, Icon } from 'antd'

const PHLegend = props => {
  const [update, setUpdate] = useState(0)
  const tick = () => {
    setUpdate(update + 1)
  }

  if (!props.reference) {
    return <Icon type="loading" />
  }

  const chart = props.reference.chartInstance
  const legendList = chart.config.data.datasets.map((set, i) => {
    return (
      <Button
        type="dashed"
        key={i}
        value={i}
        size="small"
        className={chart.legend.legendItems[i].hidden ? 'legendHidden' : ''}
        onClick={legendClick.bind(this, chart, i, tick)}
      >
        <span
          className="legendColor"
          style={{ backgroundColor: set.backgroundColor }}
        ></span>
        {set.label}
      </Button>
    )
  })

  return (
    <div className="Legend">
      <div className="center">
        <p>
          <Icon type="info-circle" size="small" theme="filled" />{' '}
          <strong>Tip:</strong> Click on the legend items below to hide/show
          products in the chart.
        </p>
        {legendList}
      </div>
    </div>
  )
}

export default PHLegend

function legendClick(chart, index, tick) {
  let meta = chart.getDatasetMeta(index)
  meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null
  chart.update()
  tick()
}
