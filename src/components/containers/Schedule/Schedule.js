import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import {
  ScheduleWrapper,
  ScheduleTimeline,
  ScheduleNav,
  ScheduleNavContent,
  ScheduleNavContentDate,
  ScheduleNavContentTimeline
} from './ScheduleUnits';
import ScheduleGrid from './ScheduleGrid/ScheduleGrid';

const MY_QUERY = gql`
  query {
    users {
      id
    }
  }
`;

class Schedule extends Component {
  static propTypes = {
    users: PropTypes.array
  };

  static defaultProps = {
    users: []
  };

  render() {
    return (
      <ScheduleWrapper className="schedule">
        <ScheduleTimeline className="schedule-timeline" id="schedule">
          <ScheduleNav className="schedule-nav">
            <ScheduleNavContent className="schedule-nav__content">
              <ScheduleNavContentDate />
              <ScheduleNavContentTimeline />
            </ScheduleNavContent>
          </ScheduleNav>

          <ScheduleGrid />
          
        </ScheduleTimeline>
      </ScheduleWrapper>
    );
  }
}

export default graphql(MY_QUERY)(Schedule);
