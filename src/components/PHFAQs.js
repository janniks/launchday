import React from 'react'

import { Card, Col, Icon, Row } from 'antd'

const panelColumn = {
  xs: { span: 24 },
  lg: { span: 12 }
}

const FAQs = () => {
  return (
    <div>
      <h3 style={{ marginTop: '32px' }}>
        FAQs <Icon type="question-circle" size="small" theme="filled" />
      </h3>
      <Card>
        <Row gutter={16}>
          <Col {...panelColumn}>
            <h3>Where is this data from?</h3>
            <p>
              This site uses the official{' '}
              <a href="https://api.producthunt.com/v1/docs">ProductHunt API</a>{' '}
              to fetch current data. We poll ProductHunt current products every
              minute and reduce the data points afterwards.
            </p>
          </Col>
          <Col {...panelColumn}>
            <h3>Do you have data for every day ever?</h3>
            <p>
              Unfortunately, we started this project in October 2019 and only
              have the data since then. Feel free to{' '}
              <a href="https://twitter.com/intent/tweet?text=@ProductHunt%20check%20out%20launchday.netlify.com%20-%20they%20need%20your%20data!%20📊">
                tweet at ProductHunt
              </a>
              , so they can send us the missing data.{' '}
              <span role="img" aria-label="wink emoji">
                😉
              </span>
            </p>
          </Col>
          <Col {...panelColumn}>
            <h3>Is this related to ProductHunt's 'Launchday'?</h3>
            <p>
              Technically, this is not related to the{' '}
              <a href="https://www.producthunt.com/posts/launch-day-by-product-hunt/launch-day">
                ProductHunt feature
              </a>{' '}
              where you can add <code>/launchday</code> to a products URL. We
              might rename this site to avoid confusion. We love ProductHunt,
              but this site is unfortunately not affiliated with ProductHunt
              directly.
            </p>
          </Col>
        </Row>
      </Card>
    </div>
  )
}

export default FAQs
