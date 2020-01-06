import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization:
      process.env.AUTH || 'token df3142ec6bc2dcf12aeb22ac9dea71cb00dc1e62'
  }
})

export default client
