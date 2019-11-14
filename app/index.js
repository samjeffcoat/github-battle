import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'

// Component
// State
// Lifecylce Methods
// UI


class App extends React.Component{
  render() {
    return (
      <div className = 'container'>
      <Popular />
      </div>
      )
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('app')

)