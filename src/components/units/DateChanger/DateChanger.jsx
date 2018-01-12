import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';
import Icon from '../Icons/Icon';

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
    handleChange: PropTypes.func.isRequired
  };

  state = {
    value: '10.01.2018'
  };

  setPreviousDay = () => {};

  setNextDay = () => {};

  // <DatePicker />

  render() {
    return (
      <DateChangerWrapper>
        <ControlDate type="prev" onClick={this.setPreviousDay}>
          <Icon iconName="arrow" />
        </ControlDate>

        <DateLabel>{this.state.value}</DateLabel>

        <ControlDate type="next" onClick={this.setNextDay}>
          <Icon iconName="arrow" />
        </ControlDate>

        <DatePickerWrapper />
      </DateChangerWrapper>
    );
  }
}

export default DateChanger;
