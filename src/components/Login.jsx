import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Email from '../components/Email';
import OptIn from '../components/OptIn';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height:100vh;
`;

const Welcome = styled.h1`
  margin-top: 0px;
`;

const Login = ({ email, setEmail, createUser }) =>
  <Container>
    <Welcome>Join the Cagematch</Welcome>
    {!email &&
      <Email onSubmit={setEmail} />
    }
    {email &&
      <OptIn onSubmit={createUser} />
    }
  </Container>

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func
};

export default Login;
