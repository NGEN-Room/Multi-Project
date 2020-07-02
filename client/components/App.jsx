import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Level from './Level'
import Recommendations from './Recommendations'
import Profile from './Profile'
import Beginner from './Beginner'
import Intermediate from './Intermediate'
import Advanced from './Advanced'
import Background from './Background'


const App = () => (
  <Router>
   <Route path='/' component={Background}/>
    <Route path='/level' component={Level}/>
    <Route path='/recommendations' component={Recommendations}/>
    <Route path='/profile' component={Profile}/>
    <Route path='/beginner' component={Beginner}/>
    <Route path='/intermediate' component={Intermediate}/>
    <Route path='/advanced' component={Advanced}/>
  </Router>
)

export default App