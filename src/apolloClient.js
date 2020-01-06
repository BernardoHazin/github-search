import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization:
      process.env.AUTH_TOKEN || 'token 5038a506026f4ad3d98cc1d483cb9470e33de5d4'
  }
})

export default client
