import React from 'react'

import { Col, Row } from 'antd'

const bannerColumn = {
  xs: { span: 24 },
  md: { span: 12 }
}

const HunterBanner = props => {
  const ref = new URL(window.location.href).searchParams.get('ref')

  if (ref === 'producthunt') {
    return (
      <Row className="HunterBanner">
        <Col {...bannerColumn}>
          Welcome Hunters!{' '}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
          Let us know what you think! If you like Launchday, help us to the top
          of ProductHunt{' '}
          <span role="img" aria-label="rocket emoji">
            🚀
          </span>
        </Col>
        <Col className="center" {...bannerColumn}>
          <a
            href="https://www.producthunt.com/posts/launchday-beta?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-launchday-beta"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: 8 }}
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=172108&theme=light"
              alt="Product Hunt Embed"
              style={{ width: 200, height: 43 }}
            />
          </a>
        </Col>
      </Row>
    )
  }

  return null
}

export default HunterBanner
