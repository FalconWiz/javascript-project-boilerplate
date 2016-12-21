'use strict'

global.React = require('react')
global.fetch = require('isomorphic-fetch')
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'


class App extends React.Component {
  render () {
    return (
      <div className='App'>
        A good starting point!
      </div>
    )
  }
}

render(
  <Router history={ browserHistory }>
    <Route path='/' component={ App }/>
  </Router>,
  document.getElementById('app')
)
