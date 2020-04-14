import React from 'react'

class App extends React.Component {
  render () {
    return (
      <header className="navbar navbar-expand">
        <a className="navbar-brand" href="/">
          <img id="logo" src="/img/JS-box.svg" alt="JS Dock logo" />
          <span className="title">JS Box React</span>
        </a>
      </header>
    )
  }
}

export default App
