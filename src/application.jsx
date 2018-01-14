import React from 'react';
import moment from 'moment';

import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import apolloClient from './store/apolloClient';
import reduxStore from './store/reduxStore';

import initStyles from './styles/initStyles';
import theme from './styles/theme';

import Router from './pages/router';
import Icons from './components/units/Icons/Icons';

initStyles();
moment.locale('ru');

class Application extends React.Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <div className="application">
              <Icons />
              <Router />
            </div>
          </ThemeProvider>
        </ApolloProvider>
      </Provider>
    );
  }
}

export default Application;
