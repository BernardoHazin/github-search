import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization:
      process.env.AUTH || 'token ca9e8699223033ed3cf0f5f9ccd9938719cdfe18'
  }
})

export default client
