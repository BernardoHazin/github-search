import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    Authorization:
      process.env.AUTH_TOKEN ||
      'Bearer 3adc30e2402bc729a3ec46822f21b927139191bf'
  }
})

export default client
