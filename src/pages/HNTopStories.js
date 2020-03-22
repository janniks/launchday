import React from 'react'

import { Col, Layout, Row } from 'antd'

import FeedbackWrapper from 'components/FeedbackWrapper'
import FooterContent from 'components/FooterContent'
import HNChartWrapper from 'components/HNChartWrapper'
import layout from 'lib/layout'

const { Footer, Content } = Layout

const HNTopStories = () => {
  return (
    <div>
      <Content>
        <Row>
          <Col {...layout.wideColumn}>
            <HNChartWrapper />
          </Col>
        </Row>
        <Row>
          <Col {...layout.thinColumn}>
            <FeedbackWrapper />
          </Col>
        </Row>
      </Content>
      <Footer className="center">
        <Row>
          <Col {...layout.wideColumn}>
            <FooterContent />
          </Col>
        </Row>
      </Footer>
    </div>
  )
}

export default HNTopStories
