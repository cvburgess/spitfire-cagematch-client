import React from 'react';
import PropTypes from 'prop-types';
import Team from '../components/Team';

const Vote = ({ match, user }) =>
  <div>
    {
      match.teams.map(team =>
        <Team
          key={team.teamId}
          canVote={match.isVotingOpen}
          name={team.name}
          matchId={match.matchId}
          teamId={team.teamId}
          userId={user.userId}
        />
      )
    }
  </div>

Vote.propTypes = {};

export default Vote;
