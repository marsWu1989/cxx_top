import React from 'react'
import {
  Route,
} from 'react-router-dom'

import Nav from 'component/nav'
import Home from 'page/home'
import Life from 'page/life'

import './style.scss'

export default () => (
  <>
    <Route path="/" component={Nav} />
    <Route exact path="/" component={Home} />
    <Route exact path="/life" component={Life} />
  </>
)
