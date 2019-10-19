import React from 'react'

import { Card, Icon, Tabs } from 'antd'
import Chart from 'components/Chart'

const { TabPane } = Tabs

const ChartWrapper = props => {
  if (!props.datasets) {
    return (
      <div className="Status center">
        <Card className="inlineCard">
          <Icon type="loading" size="large" /> {props.status}
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
                <Icon type="up-circle" />
                Votes
              </span>
            }
          >
            <Chart datasets={props.datasets.voteDatasets} chartType="votes" />
          </TabPane>
          <TabPane
            key="comments"
            forceRender={true}
            tab={
              <span>
                <Icon type="message" />
                Comments
              </span>
            }
          >
            <Chart
              datasets={props.datasets.commentDatasets}
              chartType="comments"
            />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  )
}

export default ChartWrapper
