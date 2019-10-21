import React, { useState } from 'react'
import { Button, Form, Icon, Input, Modal, Select, Radio, Rate } from 'antd'

const { TextArea } = Input
const { Option } = Select

const FeedbackForm = props => {
  const [modalVisibility, showModal] = useState(false)

  const {
    getFieldDecorator,
    getFieldsError,
    getFieldError,
    isFieldTouched
  } = props.form

  return (
    <div className="center">
      <p>
        We love feedback and would like to hear your honest opinion about
        Launchday. Tell us what you like and dislike!
      </p>

      <Button onClick={() => showModal(true)} icon="smile" size="small">
        Give Feedback
      </Button>
      <Modal
        className="formModal"
        title={
          <span>
            Feedback{' '}
            <small>
              <em>(everything on this form is optional)</em>
            </small>
          </span>
        }
        visible={modalVisibility}
        // onOk={this.handleOk}
        onCancel={() => showModal(false)}
        footer={null}
        centered
      >
        <Form
          className="noSemicolon"
          onSubmit={event => {
            event.preventDefault()
            props.form.validateFields((err, values) => {
              if (!err) {
                console.log('Received values of form: ', values)
              }
            })
          }}
        >
          <Form.Item
            label="How helpful is Launchday to you?"
            style={{ textAlign: 'center' }}
          >
            {getFieldDecorator('rate')(<Rate />)}
          </Form.Item>
          <Form.Item label="What feature should we work on next?">
            {getFieldDecorator('feature')(
              <Select placeholder="Please select the next most important feature">
                <Option value="any-day">
                  View the ProductHunt data for any given day
                </Option>
                <Option value="blue">
                  Add tracking for other sites (e.g. HackerNews)
                </Option>
                <Option value="green">
                  product tracking: alerts (e.g. votes spikes), comment
                  sentiment analysis, competitor performance tracking
                </Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="What would you change about Launchday and what's missing?">
            {getFieldDecorator('change-missing')(<TextArea rows={2} />)}
          </Form.Item>
          <Form.Item label="Tell us anything else you want to let us know...">
            {getFieldDecorator('other')(<TextArea rows={2} />)}
          </Form.Item>
          <Form.Item
            label={
              <span>
                Would you like to be notified about new feature releases?
                <br />
                <small>
                  <em> No annoying newsletter mails, we promise!</em>
                </small>
              </span>
            }
          >
            {getFieldDecorator('email')(
              <Input
                placeholder="Enter your username"
                prefix={<Icon type="mail" />}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default FeedbackForm
