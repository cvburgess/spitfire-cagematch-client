import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;
const Input = styled.input`
  color: #000;
  font-size: 20px;
  background: #fff;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  border: none;
  max-height: 50px;
  margin-right: 10px;
`;
const Button = styled.button`
  color: #000;
  font-size: 20px;
  background: #fff;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  border: none;
  max-height: 50px;
`;

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
          placeholder="email address"
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
