import React, { Component } from 'react';

import {
  ScheduleGridWrapper,
  ScheduleGridTable,
  ScheduleGridHourLine,
  ScheduleGridHourLegend,
  ScheduleGridCurrentTimeLegend,
  ScheduleGridCurrentTimeLine
} from './ScheduleGridUnits';

/* 
  Utility function
*/

const getPositionOfHourLineFromLeftSide = hour => {
  // column width of one hour is 65px
  const hourColumnWidth = 65;
  // grid table begins from 8 a.m
  const firstWorkHour = 8;
  // offset from left side of grid
  const offsetFromLeftBorder = 35;

  return hourColumnWidth * (hour - (firstWorkHour - 1)) - offsetFromLeftBorder;
};

class GridCurrentTimeLine extends Component {
  state = {
    hour: new Date().getHours(),
    minutes: new Date().getMinutes()
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const time = new Date();

      this.setState({
        hour: time.getHours(),
        minutes: time.getMinutes()
      });
    }, 1000 * 60);
  }

  componentWillMount() {
    clearTimeout(this.timer);
  }

  render() {
    const hour = this.state.hour;
    const minute = this.state.minutes;

    const timeInHours = hour + minute / 60;

    const formattedMinutes =
      minute.toString().length === 1
        ? minute === 0 ? '00' : `0${minute}`
        : minute;

    const formattedTime = `${hour}:${formattedMinutes}`;

    return (
      <ScheduleGridCurrentTimeLine
        left={getPositionOfHourLineFromLeftSide(timeInHours)}
      >
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

    for (let hour = 8; hour <= 23; hour++) {
      lines.push(
        <ScheduleGridHourLine
          left={getPositionOfHourLineFromLeftSide(hour)}
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
