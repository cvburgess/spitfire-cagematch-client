import React from 'react';
import PropTypes from 'prop-types';
import Email from '../components/Email';
import OptIn from '../components/OptIn';

const Login = ({ email, setEmail, createUser }) =>
  <div>
    {!email &&
      <Email onSubmit={setEmail} />
    }
    {email &&
      <OptIn onSubmit={createUser} />
    }
  </div>

Login.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func
};

export default Login;
