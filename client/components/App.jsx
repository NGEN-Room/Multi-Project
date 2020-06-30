import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Level from './Level'
import Recommendations from './Recommendations'
import Profile from './Profile'

const App = () => (
  <Router>
    <Route path='/level' component={Level}/>
    <Route path='/recommendations' component={Recommendations}/>
    <Route path='/profile' component={Profile}/>
  </Router>
)

export default App