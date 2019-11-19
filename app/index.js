import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Popular from './components/Popular'
import Battle from './components/Battle'
import { ThemeProvider } from './contexts/theme'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <div className='container'>
          <Battle />
        </div>
      </ThemeProvider>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)