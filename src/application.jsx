import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import apolloClient from './store/apolloClient';

import initStyles from './styles/initStyles';
import theme from './styles/theme';

import SchedulePage from './pages/schedulePage/schedulePage';

initStyles();

class Application extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <SchedulePage />
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default Application;
