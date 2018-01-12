import React, { Component } from 'react';
import moment from 'moment';

import {
  ScheduleGridWrapper,
  ScheduleGridTable,
  ScheduleGridHourLine,
  ScheduleGridHourLegend,
  ScheduleGridCurrentTimeLegend,
  ScheduleGridCurrentTimeLine
} from './ScheduleGridUnits';

import {
  FIRST_WORK_HOUR,
  LAST_WORK_HOUR,
  getPositionOfTimeFromLeftSide
} from '../utils/utils';

import { formatTime } from '../utils/timeUtils';

class GridCurrentTimeLine extends Component {
  render() {
    const { currentTime } = this.props;
    const formattedTime = formatTime(currentTime);

    return (
      <ScheduleGridCurrentTimeLine
        left={getPositionOfTimeFromLeftSide(currentTime)}
      >
        <ScheduleGridCurrentTimeLegend>
          {formattedTime}
        </ScheduleGridCurrentTimeLegend>
      </ScheduleGridCurrentTimeLine>
    );
  }
}

class ScheduleGrid extends Component {
  state = {
    currentTime: new Date()
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        currentTime: new Date()
      });
    }, 1000 * 60);
  }

  componentWillMount() {
    clearTimeout(this.timer);
  }

  renderGridTableLines() {
    const lines = [];

    const currentHour = moment(this.props.currentTime).hours();

    for (let hour = FIRST_WORK_HOUR; hour <= LAST_WORK_HOUR; hour++) {
      const hourIsPast = hour < currentHour;

      lines.push(
        <ScheduleGridHourLine
          left={getPositionOfTimeFromLeftSide(hour)}
          key={hour}
        >
          <ScheduleGridHourLegend past={hourIsPast}>
            {hour}
          </ScheduleGridHourLegend>
        </ScheduleGridHourLine>
      );
    }

    return lines;
  }

  render() {
    return (
      <ScheduleGridWrapper className="schedule-grid">
        <ScheduleGridTable>
          {this.renderGridTableLines()}

          <GridCurrentTimeLine currentTime={this.state.currentTime} />
        </ScheduleGridTable>
      </ScheduleGridWrapper>
    );
  }
}

export default ScheduleGrid;
