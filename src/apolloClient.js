import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization:
      process.env.AUTH_TOKEN ||
      'Bearer 367b8709fa9d44eff6cd8e1cfed89c94de024013'
  }
})

export default client
