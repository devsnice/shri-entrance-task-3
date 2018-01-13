import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPicker } from 'react-dates';

const DayPickerBox = styled(Box)`
  width: 720px;

  ${media.lessThan('small')`
    width: 100%;
    overflow-y: scroll;
  `};
`;

class DatePicker extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeDatePicker: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    initialDate: PropTypes.object.isRequired
  };

  handleChangeDate = date => {
    this.props.handleChange(date);
    this.props.closeDatePicker();
  };

  render() {
    const { isOpen, initialDate } = this.props;

    if (!isOpen) return null;

    return (
      <DayPickerBox>
        <DayPicker
          onOutsideClick={this.props.closeDatePicker}
          onDayClick={this.handleChangeDate}
          numberOfMonths={3}
          initialDate={initialDate}
        />
      </DayPickerBox>
    );
  }
}

export default DatePicker;
