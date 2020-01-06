import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: `token ${process.env.REACT_APP_AUTH_TOKEN}`
  }
})

export default client
