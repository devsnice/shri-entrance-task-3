import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPicker } from 'react-dates';

const CalendarBox = styled(Box)`
  width: 720px;

  ${media.lessThan('small')`
    width: 100%;
    overflow-y: scroll;
  `};
`;

class Calendar extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDatePicker: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    initialDate: PropTypes.object,
    numberOfMonths: PropTypes.number
  };

  static defaultProps = {
    numberOfMonths: 1,
    initialDate: null
  };

  handleChangeDate = date => {
    this.props.handleChange(date);
    this.props.closeDatePicker();
  };

  render() {
    const { isOpen, initialDate, numberOfMonths } = this.props;

    if (!isOpen) return null;

    return (
      <CalendarBox>
        <DayPicker
          onOutsideClick={this.props.closeDatePicker}
          onDayClick={this.handleChangeDate}
          numberOfMonths={numberOfMonths}
          initialDate={initialDate}
        />
      </CalendarBox>
    );
  }
}

export default Calendar;
