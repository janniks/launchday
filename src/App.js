import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'App.less'

import { Col, Icon, Layout, Row } from 'antd'

import PHToday from 'pages/PHToday'
import HNTopStories from 'pages/HNTopStories'
import Policies from 'pages/Policies'
import Terms from 'pages/Terms'

import rocket from 'resources/rocket'
import showCookiePopup from 'lib/cookiePopup'
import layout from 'lib/layout'

const { Header } = Layout

const RocketIcon = () => <Icon component={rocket} />

const App = () => {
  showCookiePopup()

  return (
    <div>
      <Layout>
        <Header>
          <Row>
            <Col {...layout.wideColumn}>
              <a className="logo beta" href="/">
                <h1>
                  Trendy <RocketIcon />
                </h1>
              </a>
            </Col>
          </Row>
        </Header>
        <Router>
          <Route path="/" exact component={PHToday} />
          <Route path="/hn" exact component={HNTopStories} />
          <Route path="/terms" component={Terms} />
          <Route path="/policies" component={Policies} />
        </Router>
      </Layout>
    </div>
  )
}

export default App
