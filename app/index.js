import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

// Component
// State
// Lifecylce Methods
// UI


class App extends React.Component{
  render() {
    return (
      <div>
      Hello Marquis!
      </div>
      )
  }

}

ReactDOM.render(
  <App/>,
  document.getElementById('app')

)