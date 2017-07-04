import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import format from 'date-fns/format';
import { FIND_USER, FIND_MATCHES, CREATE_USER } from '../graphql';
import Login from '../components/Login';
import Vote from '../components/Vote';

const ApolloShell = ({ createUser, findUser, findMatches: { error, loading, matches }, email, setEmail }) => {
  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR</h1>}
      {!(findUser || findUser.user) &&
        <Login
          email={email}
          setEmail={setEmail}
          createUser={(hasOptedIn) => createUser(email, hasOptedIn)}
        />
      }
      {findUser && findUser.user && matches && matches.length &&
        <Vote user={findUser.user} match={matches[0]} />
      }
    </div>
  );
};

ApolloShell.propTypes = {
  email: PropTypes.string
};

export default compose(
  graphql(FIND_USER, {
    name: "findUser",
    skip: (ownProps) => !ownProps.email,
    options: ({ email }) => ({ variables: { email } }),
  }),
  graphql(FIND_MATCHES, {
    name: "findMatches",
    options: { variables: { date: format(new Date(), 'YYYY-MM-DD') } },
  }),
  graphql(CREATE_USER, {
    props: ({ mutate }) => ({
      createUser: (email, hasOptedIn) => mutate({ variables: { email, hasOptedIn } }),
    })
  })
)(ApolloShell);
