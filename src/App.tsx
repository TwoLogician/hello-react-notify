import * as React from "react"
import ReactNotifications from "react-browser-notifications"

import "./App.css"

import logo from "./logo.svg"

type State = {
  body: string
  icon: string
  tag: string
  title: string
}

class App extends React.Component<{}, State> {
  n: any

  constructor(props) {
    super(props);
    this.state = {
      body: "Body",
      icon: "https://www.flaticon.com/premium-icon/icons/svg/874/874569.svg",
      tag: new Date().getTime().toString(),
      title: "Title"
    }
  }

  showNotifications = () => {
    let tag = new Date().getTime().toString()
    this.setState({ tag })
    if (this.n.supported()) this.n.show();
  }

  handleClick = event => () => {
    window.focus()
    this.n.close(event.target.tag);
  }

  onRef = e => {
    this.n = e
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>

        <ReactNotifications
          onRef={this.onRef} // Required
          title={this.state.title} // Required
          body={this.state.body}
          icon={this.state.icon}
          tag={this.state.tag}
          onClick={this.handleClick(event)}
        />

        <button onClick={this.showNotifications}>
          Notify Me!
        </button>
      </div>
    )
  }
}

export default App
