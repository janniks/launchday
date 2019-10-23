import React from 'react'

import { Icon } from 'antd'

const FooterContent = () => {
  return (
    <div>
      <p>
        © {new Date().getFullYear()}{' '}
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
      <a href="https://www.netlify.com">
        <img alt="Deploys by netlify" src="/images/netlify-light.svg" />
      </a>
    </div>
  )
}

export default FooterContent
