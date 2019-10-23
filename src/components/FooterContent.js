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
      <div>
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
        <a href="https://www.netlify.com">
          <img
            alt="Deploys by netlify"
            src="/images/netlify-light.svg"
            style={{ borderRadius: 8, border: '1px solid gray', height: 43 }}
          />
        </a>
      </div>
    </div>
  )
}

export default FooterContent
