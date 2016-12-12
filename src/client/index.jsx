'use strict'

global.React = require('react')
global.fetch = require('isomorphic-fetch')
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'


const App = React.createClass({
  getInitialState () {
    return {
      data: {}
    }
  },

  render () {
    return (
      <div className='App'>
        This is a neat thing! Wow!
      </div>
    )
  }
})

render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }/>
  </Router>,
  document.getElementById('app')
)
