import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/units/Header/Header';

import SchedulePage from './SchedulePage/SchedulePage';
import CreateEventPage from './CreateEventPage/CreateEventPage';
import EditEventPage from './EditEventPage/EditEventPage';

class ApplicationRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="application">
          <Header />

          <Route exact path="/" component={SchedulePage} />
          <Route exact path="/eventEditor" component={CreateEventPage} />
          <Route exact path="/eventEditor/:id" component={EditEventPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default ApplicationRouter;
