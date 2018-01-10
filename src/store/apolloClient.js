import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const graphqlEndpoint = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: graphqlEndpoint }),
  cache: new InMemoryCache()
});

export default client;
