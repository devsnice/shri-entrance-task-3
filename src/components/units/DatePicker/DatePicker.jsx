import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';
import moment from 'moment';

import { Box, Flex } from 'grid-styled';
import Control from '../Control/Control';
import Icon from '../Icons/Icon';
import Input from '../Input/Input';

import Calendar from '../Calendar/Calendar';

const DatePickerBox = styled(Box)`
  width: 100%;
  position: relative;
`;

const CalendarBox = styled(Box)`
  position: absolute;
  top: 100%;
  z-index: 50;
`;

class DatePicker extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.object.isRequired
  };

  state = {
    calendarIsOpen: false
  };

  changeDay = day => {
    const { name } = this.props;

    this.props.handleChange(name, day);
  };

  handleOpenCalendar = e => {
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
    const { value } = this.props;

    return (
      <DatePickerBox>
        <Input
          label="Дата"
          value={moment(value).format('LL')}
          placeholder="Дата"
          iconElement={<Icon iconName="calendar" />}
          onClick={this.handleOpenCalendar}
          onFocus={this.handleOpenCalendar}
          readOnly
        />

        <CalendarBox>
          <Calendar
            handleChange={this.state.calendarIsOpen}
            closeDatePicker={this.handleCloseCalendar}
            handleChange={this.changeDay}
            numberOfMonths={1}
            initialDate={value}
            isOpen={this.state.calendarIsOpen}
          />
        </CalendarBox>
      </DatePickerBox>
    );
  }
}

export default DatePicker;
