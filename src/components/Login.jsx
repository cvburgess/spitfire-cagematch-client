import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Email from '../components/Email';
import OptIn from '../components/OptIn';
import logoImage from '../assets/logo.png';

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: -20px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

const Welcome = styled.h1``;

const Login = ({ email, setEmail, createUser }) =>
  <div>
    <Container>
      <Logo src={logoImage}/>
      <Welcome>Join the Cagematch</Welcome>
      {!email &&
        <Email onSubmit={setEmail} />
      }
      {email &&
        <OptIn onSubmit={createUser} />
      }
    </Container>
  </div>

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func
};

export default Login;
