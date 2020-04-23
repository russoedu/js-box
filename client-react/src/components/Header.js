import React from 'react'

class App extends React.Component {
  constructor () {
    super()
    this.client = process.env.REACT_APP_CLIENT.charAt(0).toUpperCase() + process.env.REACT_APP_CLIENT.substring(1)
    this.environment = process.env.REACT_APP_ENVIRONMENT
  }
  render () {
    return (
      <header className="navbar navbar-expand">
        <a className="navbar-brand" href="/">
          <img id="logo" height="75px" src="/img/JS-box.svg" alt="JS Box logo" />
          <span className="title">JS Box {this.client} - {this.environment}</span>
        </a>
      </header>
    )
  }
}

export default App
