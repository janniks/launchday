import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'App.less'

import { Card, Col, Icon, Layout, Row } from 'antd'
import moment from 'moment-timezone'
import Today from 'pages/Today'

import rocket from 'resources/rocket'

const { Header, Footer, Content } = Layout

const RocketIcon = props => <Icon component={rocket} />

const colProps = { xs: { span: 22, offset: 1 }, md: { span: 12, offset: 6 } }

const App = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Row>
            <Col {...colProps}>
              <a className="card" href="/">
                <h1>
                  Launchday <RocketIcon />
                </h1>
              </a>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col {...colProps}>
              <p>
                It's currently{' '}
                {moment()
                  .tz('America/Los_Angeles')
                  .format('hh:mm A')}{' '}
                at ProductHunt!
              </p>
              <Router>
                <Route exact path="/" component={Today} />
              </Router>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row>
            <Col {...colProps}>made by @jnnksbrt</Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  )
}

export default App
