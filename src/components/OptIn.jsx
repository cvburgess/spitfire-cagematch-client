import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const primaryColor = '#185A9D';
const secondaryColor = '#43CEA2';
const dangerColor = '#F15E14';
const warningColor = '#F1BE14';

const Container = styled.div``;
const CheckboxButton = styled.button`
  color: #000;
  font-size: 20px;
  background: ${props => props.hasOptedIn ? secondaryColor : dangerColor};
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

class OptIn extends Component {

  constructor(props) {
    super(props);
    this.state = { hasOptedIn: true };
  }

  toggleOptIn = () => this.setState((state, props) => ({ hasOptedIn: !state.hasOptedIn }));

  sumbitOptIn = () => this.props.onSubmit(this.state.hasOptedIn);

  render() {
    const { hasOptedIn } = this.state;
    return (
      <Container>
        <CheckboxButton
          onClick={this.toggleOptIn}
          hasOptedIn={hasOptedIn}
        >{hasOptedIn ? 'Spitfire can send me emails' : 'Do not send me emails'}</CheckboxButton>
        <Button onClick={this.sumbitOptIn}>{'>'}</Button>
      </Container>
    );
  }

}

OptIn.propTypes = {
  onSubmit: PropTypes.func
};

export default OptIn;
