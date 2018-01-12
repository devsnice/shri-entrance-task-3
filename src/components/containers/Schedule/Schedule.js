import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import {
  ScheduleWrapper,
  ScheduleDatepickerMobile,
  ScheduleTimeline,
  ScheduleNav,
  ScheduleNavContent,
  ScheduleNavContentDate,
  ScheduleNavContentTimeline
} from './ScheduleUnits';

import ScheduleGrid from './ScheduleGrid/ScheduleGrid';
import ScheduleFloors from './ScheduleFloors/ScheduleFloors';

import ScheduleFloorsGraphQLRequest from './ScheduleFloorsGraphQLRequest/ScheduleFloorsGraphQLRequest';

import DateChanger from '../../units/DateChanger/DateChanger';

class Schedule extends Component {
  static propTypes = {
    data: PropTypes.shape({
      events: PropTypes.array
    })
  };

  static defaultProps = {
    data: {
      events: []
    }
  };

  state = {
    currentDay: moment().format('MM-DD-YYYY')
  };

  handleChangeDay = newDay => {
    this.setState({
      currentDay: newDay
    });
  };

  render() {
    const { data } = this.props;

    const currentDayString = this.state.currentDay.toString();
    const nextDayString = moment(this.state.currentDay)
      .add(1, 'days')
      .toString();

    return (
      <ScheduleWrapper>
        <ScheduleDatepickerMobile>
          <DateChanger
            currentDay={this.state.currentDay}
            handleChange={this.handleChangeDay}
          />
        </ScheduleDatepickerMobile>

        <ScheduleTimeline id="schedule">
          <ScheduleNav>
            <ScheduleNavContent>
              <ScheduleNavContentDate>
                <DateChanger
                  currentDay={this.state.currentDay}
                  handleChange={this.handleChangeDay}
                />
              </ScheduleNavContentDate>
              <ScheduleNavContentTimeline />
            </ScheduleNavContent>
          </ScheduleNav>

          <ScheduleGrid />

          <ScheduleFloorsGraphQLRequest
            dateStart={currentDayString}
            dateEnd={nextDayString}
          />
        </ScheduleTimeline>
      </ScheduleWrapper>
    );
  }
}

export default Schedule;
