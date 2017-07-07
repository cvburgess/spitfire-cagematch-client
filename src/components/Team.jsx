import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import { CREATE_VOTE } from '../graphql';

const colors = [
  '#9d1893',
  '#185A9D',
  '#43CEA2',
  '#F15E14',
];

const Container = styled.div`
  background: ${props => colors[props.order]};
  height: ${props => props.height}%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const TeamName = styled.h2``;

const VoteButton = styled.button`
  color: #000;
  font-size: 20px;
  background: #fff;
  padding: 10px 15px 10px 15px;
  text-decoration: none;
  border: none;
  max-height: 50px;
`;

const Team = ({ canVote, createVote, height, matchId, name, order, teamId, userId }) =>
  <Container height={height} order={order}>
    <TeamName>{name}</TeamName>
    {canVote &&
      <VoteButton onClick={createVote}>Vote</VoteButton>
    }
  </Container>

Team.propTypes = {
  canVote: PropTypes.bool,
  createVote: PropTypes.func,
  height: PropTypes.int,
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
