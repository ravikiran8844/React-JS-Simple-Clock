import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {showButton: false}

  toogleButton = () => {
    this.setState(prevState => ({showButton: !prevState.showButton}))
  }

  render() {
    const {showButton} = this.state
    return (
      <div className="app-container">
        <button
          onClick={this.toogleButton}
          type="button"
          className="toggle-button"
        >
          {showButton ? 'Hide' : 'Show'}
        </button>
        {showButton && <Clock />}
      </div>
    )
  }
}

export default App
