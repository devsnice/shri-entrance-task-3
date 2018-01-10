import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './store/apolloClient';

import SchedulePage from './pages/schedulePage/schedulePage';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <SchedulePage />
  </ApolloProvider>,
  document.getElementById('root')
);
