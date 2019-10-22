import React, { useState } from 'react'

import { Card, Form, Icon } from 'antd'

import FeedbackForm from 'components/FeedbackForm'

const FeedbackWrapper = () => {
  const setWrapper = useState(-1)[1]
  const resetForm = () => {
    setWrapper(Date.now())
  }

  const WrappedForm = Form.create()(FeedbackForm)

  return (
    <div>
      <h3 style={{ marginTop: '32px' }}>
        Feedback <Icon type="bug" size="small" theme="filled" />
      </h3>
      <Card>
        <WrappedForm resetForm={resetForm} />
      </Card>
    </div>
  )
}

export default FeedbackWrapper
