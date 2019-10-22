import React, { useState } from 'react'
import { Button, Form, Icon, Input, Modal, Select, Rate, message } from 'antd'
import axios from 'axios'

const { TextArea } = Input
const { Option, OptGroup } = Select

const formEncode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

const formSubmit = (e, props, showModal) => {
  e.preventDefault()
  props.form.validateFields((err, values) => {
    axios
      .post(
        '/',
        formEncode({ 'form-name': 'netlify-feedback-form-v1', ...values }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then(() => {
        showModal(false)
        message.info('Thanks for your time and feedback!')
        props.resetForm()
      })
      .catch(error => {
        showModal(false)
        message.warning('Oops, something went wrong...')
      })
  })
}

const FeedbackForm = props => {
  const [modalVisibility, showModal] = useState(false)

  const { getFieldDecorator } = props.form

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
            Feedback
            <small style={{ marginLeft: 8 }}>
              <em>Everything on this form is optional</em>
            </small>
          </span>
        }
        visible={modalVisibility}
        onCancel={() => showModal(false)}
        footer={null}
        centered
      >
        <Form
          className="noColon"
          onSubmit={e => formSubmit(e, props, showModal)}
        >
          <Form.Item
            label="How helpful is Launchday to you?"
            style={{ textAlign: 'center' }}
          >
            {getFieldDecorator('rate')(<Rate />)}
          </Form.Item>
          <Form.Item label="What feature should we work on next?">
            {getFieldDecorator('feature')(
              <Select placeholder="The next most important feature (optional)">
                <Option value="any-day">
                  View the Launchday charts for any given day in the past
                </Option>
                <Option value="search-product">
                  Add search for specific product launches
                </Option>
                <Option value="other-sites">
                  Add tracking for other sites (e.g. HackerNews)
                </Option>
                <OptGroup label="Product Tracking">
                  <Option value="alerts">
                    Automated alerts (e.g. vote spikes)
                  </Option>
                  <Option value="comment-sentiment">
                    Comment sentiment analysis
                  </Option>
                  <Option value="competitor-tracking">
                    Competitor performance tracking
                  </Option>
                </OptGroup>
                <Option value="none">None of the above</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="What would you change about Launchday and what's missing?">
            {getFieldDecorator('change-missing')(
              <TextArea
                rows={2}
                placeholder="Any changes, missing features, bug reports (optional)"
              />
            )}
          </Form.Item>
          <Form.Item label="Tell us anything else you want to let us know...">
            {getFieldDecorator('other')(
              <TextArea rows={2} placeholder="Anything else (optional)" />
            )}
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
                placeholder="Email address (optional)"
                prefix={<Icon type="mail" />}
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button className="formSubmit" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default FeedbackForm
