import React, { useState } from 'react'

import { Card, Icon, Radio, Tabs } from 'antd'
import Chart from 'components/Chart'

import { Switch, Redirect, Route, Link } from 'react-router-dom'

const { TabPane } = Tabs

const ChartWrapper = props => {
  if (!props.datasets) {
    return (
      <div className="Status center">
        <Icon type="loading" size="large" /> {props.status}
      </div>
    )
  }

  const Title = (
    <span>
      Today's Products
      {/* <Radio.Group
        className="floatRight"
        size="small"
        defaultValue="votes"
        onChange={e => {
          setChartType(e.target.value)
          console.log(e.target.value)
        }}
      >
        <Radio.Button value="votes">Votes</Radio.Button>
        <Radio.Button value="comments">Comments</Radio.Button>
      </Radio.Group> */}
    </span>
  )

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
