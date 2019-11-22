import React from 'react'

import { Col, Layout, Row } from 'antd'

import PHFAQs from 'components/PHFAQs'
import FeedbackWrapper from 'components/FeedbackWrapper'
import FooterContent from 'components/FooterContent'
import PHChartWrapper from 'components/PHChartWrapper'
import PHTimeTick from 'components/PHTimeTick'
import HunterBanner from 'components/HunterBanner'
import layout from 'lib/layout'

const { Footer, Content } = Layout

const PHToday = () => {
  return (
    <div>
      <Content>
        <Row>
          <Col {...layout.wideColumn}>
            <HunterBanner />
            <p>
              Launchday shows you the history of votes/comments for products on
              ProductHunt. All times are shown in ProductHunt time (i.e. San
              Francisco time, PDT PST)
            </p>
            <PHTimeTick />
            <PHChartWrapper />
          </Col>
        </Row>
        <Row>
          <Col {...layout.wideColumn}>
            <PHFAQs />
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

export default PHToday
