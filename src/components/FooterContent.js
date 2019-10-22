import React from 'react'

import { Card, Col, Icon, Row } from 'antd'

const FooterContent = () => {
  return (
    <div>
      <p>
        made by{' '}
        <a href="https://twitter.com/jnnksbrt">
          @jnnksbrt <Icon type="twitter" />
        </a>
      </p>
      <p>
        source code on{' '}
        <a href="https://github.com/janniks/launchday">
          GitHub <Icon type="github" />
        </a>
      </p>
    </div>
  )
}

export default FooterContent
