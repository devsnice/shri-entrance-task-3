import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';
import moment from 'moment';

import { Box, Flex } from 'grid-styled';
import Control from '../Control/Control';

import DatePicker from '../DatePicker/DatePicker';

const DateChangerWrapper = styled(Flex).attrs({
  justify: 'space-between',
  align: 'center'
})`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 11px 0;

  ${media.lessThan('small')`
    padding: 12px 16px;
  `};
`;

const DateLabel = styled(Box)`
  text-align: center;
  font-family: ${props => props.theme.fontMedium};
  font-size: 15px;
  color: #000000;
  line-height: 18px;
  cursor: pointer;
`;

const DatePickerWrapper = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20;
  width: 100%;
`;

const ControlDate = styled(Box)`
  ${props => props.type === 'next' && `transform: rotate(180deg)`};
`;

class DateChanger extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    currentDay: PropTypes.object.isRequired
  };

  state = {
    calendarIsOpen: false
  };

  setPreviousDay = () => {
    const previousDay = moment(this.props.currentDay).subtract(1, 'days');

    this.changeDay(previousDay);
  };

  setNextDay = () => {
    const nextDay = moment(this.props.currentDay).add(1, 'days');

    this.changeDay(nextDay);
  };

  changeDay = day => {
    this.props.handleChange(day);
  };

  handleOpenCalendar = () => {
    this.setState({
      calendarIsOpen: true
    });
  };

  handleCloseCalendar = () => {
    this.setState({
      calendarIsOpen: false
    });
  };

  render() {
    const { currentDay } = this.props;

    return (
      <DateChangerWrapper>
        <ControlDate type="prev" onClick={this.setPreviousDay}>
          <Control iconName="arrow" />
        </ControlDate>

        <DateLabel onClick={this.handleOpenCalendar}>
          {moment(currentDay).format('D MMM')}
        </DateLabel>

        <ControlDate type="next" onClick={this.setNextDay}>
          <Control iconName="arrow" />
        </ControlDate>

        <DatePickerWrapper>
          <DatePicker
            handleChange={this.state.calendarIsOpen}
            closeDatePicker={this.handleCloseCalendar}
            handleChange={this.changeDay}
            initialDate={currentDay}
            isOpen={this.state.calendarIsOpen}
          />
        </DatePickerWrapper>
      </DateChangerWrapper>
    );
  }
}

export default DateChanger;
