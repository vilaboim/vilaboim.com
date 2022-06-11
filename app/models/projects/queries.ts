import { gql } from '~/constants';

export const pinnedItems = gql`
  query pinnedItems($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6) {
        edges {
          node {
            ... on Repository {
              name
              id
              url
            }
          }
        }
      }
    }
  }
`
