import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from '../components/units/Header/Header';

import SchedulePage from './SchedulePage/SchedulePage';
import EventEditorPage from './EventEditorPage/EventEditorPage';

class ApplicationRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="application">
          <Header />

          <Route exact path="/" component={SchedulePage} />
          <Route exact path="/event" component={EventEditorPage} />
          <Route exact path="/event/:id" component={EventEditorPage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default ApplicationRouter;
