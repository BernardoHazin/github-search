import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization: 'token 022d338895eeb8e4fb2af3185a64e0d413186bf6'
  }
})

export default client
