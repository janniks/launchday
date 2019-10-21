import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'App.less'

import { Col, Icon, Layout, Row } from 'antd'
import Today from 'pages/Today'
import FAQs from 'components/FAQs'

import rocket from 'resources/rocket'
import FeedbackWrapper from 'components/FeedbackWrapper'

const { Header, Footer, Content } = Layout

const RocketIcon = () => <Icon component={rocket} />

const wideColumn = {
  xs: { span: 22, offset: 1 },
  sm: { span: 22, offset: 1 },
  md: { span: 20, offset: 2 },
  lg: { span: 18, offset: 3 },
  xl: { span: 14, offset: 5 }
}

const thinColumn = {
  xs: { span: 22, offset: 1 },
  sm: { span: 20, offset: 2 },
  md: { span: 14, offset: 5 },
  lg: { span: 10, offset: 7 },
  xl: { span: 8, offset: 8 }
}

const App = () => {
  return (
    <div>
      <Layout>
        <Header>
          <Row>
            <Col {...wideColumn}>
              <a className="logo beta" href="/">
                <h1>
                  Launchday <RocketIcon />
                </h1>
              </a>
            </Col>
          </Row>
        </Header>
        <Content>
          <Row>
            <Col {...wideColumn}>
              <p>
                Launchday shows you the history of votes/comments for products
                on ProductHunt. All times are shown in ProductHunt time (i.e.
                San Francisco time, PDT PST)
              </p>
              <Router>
                <Route path="/" component={Today} />
              </Router>
            </Col>
          </Row>
          <Row>
            <Col {...wideColumn}>
              <FAQs />
            </Col>
          </Row>
          <Row>
            <Col {...thinColumn}>
              <FeedbackWrapper />
            </Col>
          </Row>
        </Content>
        <Footer className="center">
          <Row>
            <Col {...wideColumn}>made by @jnnksbrt</Col>
          </Row>
        </Footer>
      </Layout>
    </div>
  )
}

export default App
