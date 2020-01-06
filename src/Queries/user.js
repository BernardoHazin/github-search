import { gql } from 'apollo-boost'

export default gql`
  query getUser($user: String!) {
    user(login: $user) {
      name
      email
      bio
      company
      location
      starredRepositories {
        totalCount
      }
      repositories(first: 5, orderBy: { direction: DESC, field: STARGAZERS }) {
        totalCount
        nodes {
          name
          description
          stargazers {
            totalCount
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      avatarUrl
    }
  }
`
