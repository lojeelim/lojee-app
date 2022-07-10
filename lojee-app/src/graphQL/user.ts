import { gql } from 'apollo-angular';

export const GET_USERS = gql`
query MyQuery {
  users {
    password
    username
  }
}
`;