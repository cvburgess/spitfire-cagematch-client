import React, { Component } from 'react';
import styled from 'styled-components';
import ApolloShell from './containers/ApolloShell';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: localStorage.getItem('email') || ""
    }
  }

  setEmail = (email) => {
    // localStorage.setItem('email', email);
    this.setState({ email });
  }

  render() {
    const { email } = this.state;
    return (
        <ApolloShell
          email={email}
          setEmail={this.setEmail}
        />
    );
  }
}

export default App;
