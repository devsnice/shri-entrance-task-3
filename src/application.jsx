import React from 'react';
import moment from 'moment';

import { ApolloProvider } from 'react-apollo';
import { ThemeProvider } from 'styled-components';

import apolloClient from './store/apolloClient';

import initStyles from './styles/initStyles';
import theme from './styles/theme';

import Router from './pages/router';
import Icons from './components/units/Icons/Icons';

initStyles();
moment.locale('ru');

class Application extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <div className="application">
            <Icons />
            <Router />
          </div>
        </ThemeProvider>
      </ApolloProvider>
    );
  }
}

export default Application;
