import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

class OptIn extends Component {

  constructor(props) {
    super(props);
    this.state = { hasOptedIn: false };
  }

  toggleOptIn = ({ target }) => this.setState({ hasOptedIn: target.checked });

  sumbitOptIn = () => this.props.onSubmit(this.state.hasOptedIn);

  render() {
    const { hasOptedIn } = this.state;
    return (
      <Container>
        <Input
          onChange={this.toggleOptIn}
          type="checkbox"
          value={hasOptedIn}>
        </Input>
        <Button onClick={this.sumbitOptIn}>{'>'}</Button>
      </Container>
    );
  }

}

OptIn.propTypes = {
  onSubmit: PropTypes.func
};

export default OptIn;
