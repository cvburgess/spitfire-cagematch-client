import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { CREATE_VOTE } from '../graphql';

const TeamName = styled.span``;
const VoteButton = styled.button``;

const Team = ({ canVote, createVote, matchId, name, teamId, userId }) =>
  <div>
    <TeamName>{name}</TeamName>
    {canVote &&
      <VoteButton onClick={createVote}>Vote</VoteButton>
    }
  </div>

Team.propTypes = {
  canVote: PropTypes.bool,
  createVote: PropTypes.func,
  matchId: PropTypes.string,
  name: PropTypes.string,
  teamId: PropTypes.string,
  userId: PropTypes.string
};

export default graphql(CREATE_VOTE, {
  props: ({ mutate, ownProps: { matchId, teamId, userId } }) => ({
    createVote: () => mutate({ variables: { matchId, teamId, userId } }),
  })
})(Team);
