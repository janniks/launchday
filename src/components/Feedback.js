import React from 'react'

import { Card, Icon } from 'antd'

const Feedback = () => {
  return (
    <div>
      <h3 style={{ marginTop: '32px' }}>
        Feedback <Icon type="bug" size="small" theme="filled" />
      </h3>
      <Card>send feedback</Card>
    </div>
  )
}

export default Feedback
