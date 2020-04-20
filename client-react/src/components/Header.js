import React from 'react'

class App extends React.Component {
  render () {
    return (
      <header className="navbar navbar-expand">
        <a className="navbar-brand" href="/">
          <img id="logo" height="75px" src="/img/JS-box.svg" alt="JS Dock logo" />
          <span className="title">JS Box {process.env.REACT_APP_CLIENT} - {process.env.REACT_APP_ENVIRONMENT}</span>
        </a>
      </header>
    )
  }
}

export default App
