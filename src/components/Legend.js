import React, { useState } from 'react'

import { Button, Collapse, Icon } from 'antd'

const { Panel } = Collapse

const Legend = props => {
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
      {/* <div className="ant-card-head-title">Legend</div> */}
      <div className="center">
        {legendList}
        <p>
          <Icon type="info-circle" /> Click on legend items to hide/show them in
          the chart.
        </p>
      </div>
    </div>
  )
}

export default Legend

function legendClick(chart, index, tick) {
  let meta = chart.getDatasetMeta(index)
  meta.hidden = meta.hidden === null ? !chart.data.datasets[index].hidden : null
  chart.update()
  tick()
}
