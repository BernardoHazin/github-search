import { gql } from 'apollo-boost'

export default (user) => gql`
query {
  user(login: "${user}") {
    name
    email
    bio
    company
    location
    starredRepositories {
      totalCount
    }
    repositories(first: 5, orderBy: {direction: DESC, field: STARGAZERS}) {
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
