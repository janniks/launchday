import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'App.less'
import Todos from 'pages/Todos'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Todos} />
      </Router>
    </div>
  )
}

export default App
