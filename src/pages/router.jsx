import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/units/Header/Header';

import EventSchedulePage from './EventSchedulePage/EventSchedulePage';
import CreateEventPage from './CreateEventPage/CreateEventPage';
import EditEventPage from './EditEventPage/EditEventPage';

import Popup from '../components/containers/Popup/Popup';

class ApplicationRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="application">
          <Header />

          <Route exact path="/" component={EventSchedulePage} />
          <Route exact path="/eventEditor" component={CreateEventPage} />
          <Route exact path="/eventEditor/:id" component={EditEventPage} />

          <Popup />
        </div>
      </BrowserRouter>
    );
  }
}

export default ApplicationRouter;
