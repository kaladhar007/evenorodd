import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  oddOrEven = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Count is Even'
    }
    return 'Count is Odd'
  }

  settingTheState = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.floor(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg">
        <div>
          <div className="container">
            <h1>Count {count}</h1>
            <p>{this.oddOrEven()}</p>
            <button type="button" onClick={this.settingTheState}>
              Increment
            </button>
            <p>Increase By Random Number Between 0 to 100</p>
          </div>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
