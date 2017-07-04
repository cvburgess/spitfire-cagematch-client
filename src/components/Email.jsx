import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

class Email extends Component {

  constructor(props) {
    super(props);
    this.state = { email: "" };
  }

  updateEmail = ({ target }) => this.setState({ email: target.value });

  submitEmail = () => this.props.onSubmit(this.state.email);

  render() {
    const { email } = this.state;
    return (
      <Container>
        <Input
          autoComplete="email"
          onChange={this.updateEmail}
          required
          type="email"
          value={email}>
        </Input>
        <Button onClick={this.submitEmail}>{'>'}</Button>
      </Container>
    );
  }

}

Email.propTypes = {
  onSubmit: PropTypes.func
};

export default Email;
