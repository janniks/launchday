import { notification } from 'antd'
import cookie from 'react-cookies'
import moment from 'moment'

const COOKIE_STRING = '%F0%9F%8D%AA'
const accepted = cookie.load(COOKIE_STRING)

notification.config({
  placement: 'bottomRight'
})

const showCookiePopup = () => {
  if (!accepted) {
    notification.open({
      className: 'Cookie',
      message: null,
      description: '🍪 We use cookies to make this site better!',
      duration: 0,
      onClose: () => {
        cookie.save(COOKIE_STRING, 'accepted', {
          expires: moment()
            .add(1, 'months')
            .toDate()
        })
      }
    })
  }
}

export default showCookiePopup
