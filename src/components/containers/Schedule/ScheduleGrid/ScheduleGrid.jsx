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
  state = {
    time: new Date()
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000 * 60);
  }

  componentWillMount() {
    clearTimeout(this.timer);
  }

  render() {
    const { time } = this.state;
    const formattedTime = formatTime(time);

    return (
      <ScheduleGridCurrentTimeLine left={getPositionOfTimeFromLeftSide(time)}>
        <ScheduleGridCurrentTimeLegend>
          {formattedTime}
        </ScheduleGridCurrentTimeLegend>
      </ScheduleGridCurrentTimeLine>
    );
  }
}

class ScheduleGrid extends Component {
  renderGridTableLines() {
    const lines = [];

    for (let hour = FIRST_WORK_HOUR; hour <= LAST_WORK_HOUR; hour++) {
      lines.push(
        <ScheduleGridHourLine
          left={getPositionOfTimeFromLeftSide(hour)}
          key={hour}
        >
          <ScheduleGridHourLegend>{hour}</ScheduleGridHourLegend>
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

          <GridCurrentTimeLine />
        </ScheduleGridTable>
      </ScheduleGridWrapper>
    );
  }
}

export default ScheduleGrid;
