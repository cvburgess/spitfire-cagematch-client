import gql from 'graphql-tag';

export const FIND_USER = gql`
  query findUser( $email: String! ) {
    user( email: $email ) {
      userId
      email
      hasOptedIn
    }
  }`;

export const FIND_MATCHES = gql`
  query findMatches( $date: String! ) {
    matches( date: $date ) {
      matchId
      isVotingOpen
      date
      teams {
        teamId
        name
        logoData
        votes {
          user {
            userId
          }
        }
      }
    }
  }`;

export const CREATE_USER = gql`
  mutation createUser( $email: String!, $hasOptedIn: Boolean ) {
    createUser( email: $email, hasOptedIn: $hasOptedIn ) {
      userId
      email
      hasOptedIn
    }
  }`;

export const CREATE_VOTE = gql`
  mutation createVote( $userId: ID!, $matchId: ID!, $teamId: ID! ) {
    createVote( userId: $userId, matchId: $matchId, teamId: $teamId ) {
      voteId
    }
  }`;
