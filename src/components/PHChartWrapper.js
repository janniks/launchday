import React, { useEffect, useState } from 'react'

import { Card, Icon, Result, Tabs } from 'antd'

import PHChart from 'components/PHChart'
import PHService from 'services/PHDataService'

const { TabPane } = Tabs

const PHChartWrapper = () => {
  const [error, setError] = useState(false)
  const [status, setStatus] = useState('Fetching data...')
  const [datasets, setDatasets] = useState(false)

  useEffect(() => {
    PHService.getToday({ setDatasets, setStatus, setError })
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
      <h2>Today's Products</h2>
      <Card className="contentTab">
        <Tabs defaultActiveKey="votes" animated={{ tabPane: false }}>
          <TabPane
            key="votes"
            forceRender={true}
            tab={
              <span>
                <Icon type="play-circle" rotate={-90} theme="filled" />
                Votes
              </span>
            }
          >
            <PHChart datasets={datasets.voteDatasets} chartType="votes" />
          </TabPane>
          <TabPane
            key="comments"
            forceRender={true}
            tab={
              <span>
                <Icon type="message" theme="filled" />
                Comments
              </span>
            }
          >
            <PHChart datasets={datasets.commentDatasets} chartType="comments" />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}

export default PHChartWrapper
