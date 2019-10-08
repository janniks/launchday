import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import moment from 'moment-timezone'

import 'App.less'
import Today from 'pages/Today'

const App = () => {
  return (
    <div className="App">
      <h1>Launchday</h1>
      <p>
        It's currently{' '}
        {moment()
          .tz('America/Los_Angeles')
          .format('hh:mm A')}{' '}
        at ProductHunt!
      </p>
      <Router>
        <Route exact path="/" component={Today} />
      </Router>
    </div>
  )
}

export default App
