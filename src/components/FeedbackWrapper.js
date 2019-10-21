import React from 'react'

import { Card, Form, Icon } from 'antd'

import FeedbackForm from 'components/FeedbackForm'

const FeedbackWrapper = () => {
  const EnhancedForm = Form.create()(FeedbackForm)
  // <EnhancedForm wrappedComponentRef={(form) => this.form = form} />

  return (
    <div>
      <h3 style={{ marginTop: '32px' }}>
        Feedback <Icon type="bug" size="small" theme="filled" />
      </h3>
      <Card>
        <EnhancedForm />
      </Card>
    </div>
  )
}

export default FeedbackWrapper
