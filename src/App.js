import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'App.less'

import { Col, Icon, Layout, Row } from 'antd'
import Today from 'pages/Today'

import rocket from 'resources/rocket'

const { Header, Footer, Content } = Layout

const RocketIcon = () => <Icon component={rocket} />

const colProps = {
  xs: { span: 22, offset: 1 },
  sm: { span: 22, offset: 1 },
  md: { span: 20, offset: 2 },
  lg: { span: 18, offset: 3 },
  xl: { span: 16, offset: 4 }
}

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
              <Router>
                <Route path="/today" component={Today} />
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
