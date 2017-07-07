import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Team from '../components/Team';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100vh;
`;

const NoMatch = styled.h1`
  margin-top: 0px;
`;

const Vote = ({ match, user }) =>
  <Container>
    {
      match ? match.teams.map((team, order) =>
        <Team
          key={team.teamId}
          canVote={match.isVotingOpen}
          height={100/match.teams.length}
          name={team.name}
          matchId={match.matchId}
          order={order}
          teamId={team.teamId}
          userId={user.userId}
        />
      )
      : <NoMatch>No match today</NoMatch>
    }
  </Container>

Vote.propTypes = {
  match: PropTypes.object,
  user: PropTypes.object
};

export default Vote;
