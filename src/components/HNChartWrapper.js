import React, { useEffect, useState } from 'react'

import { Card, Icon, Result } from 'antd'
import HNChart from 'components/HNChart'

import HNService from 'services/HNDataService'

const HNChartWrapper = () => {
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('Fetching data...')
  const [datasets, setDatasets] = useState(false)

  useEffect(() => {
    HNService.getTopStories({ setDatasets, setStatus, setError })
  }, [])

  if (error) {
    return <Result status="warning" title="Error" subTitle={error} />
  }

  if (!datasets) {
    return (
      <div className="Status center">
        <Card className="inlineCard">
          <Icon type="loading" size="large" /> {status}
        </Card>
      </div>
    )
  }

  return (
    <div className="ChartWrapper">
      <h2>Top Stories</h2>
      <Card className="contentTab">
        <HNChart datasets={datasets} />
      </Card>
    </div>
  )
}

export default HNChartWrapper
