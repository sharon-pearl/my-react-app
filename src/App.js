import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput'
import UserInput from './UserInput/UserInput'

class App extends Component {

  state = {
    username: "Pearl"
  }

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>test app</h1>
        <UserInput changed={this.usernameChangedHandler} value={this.state.username} />
        <UserOutput username={this.state.username} title="My first React assignment" content="In order to build true intelligence we have to first let go what we know" ></UserOutput>
        <UserOutput username={this.state.username} title="My first React assignment" content="In order to build true intelligence we have to first let go what we know" ></UserOutput>
      </div>
    );
  }
}

export default App;
