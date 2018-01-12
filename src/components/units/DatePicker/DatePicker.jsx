import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import { doesNodeContainClick } from '../../../utils/domUtils';

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const DatePickerWrapper = styled(Box)`
  width: 720px;
  background: #ffffff;
  box-shadow: 0 1px 8px 0 rgba(0, 44, 92, 0.28);
  border-radius: 4px;
  padding: 16px;
  outline: none;

  ${media.lessThan('small')`
    width: 100%;
    height: 380px;
    overflow-y: scroll;
  `};
`;

class DatePicker extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
  };

  setDay = () => {};

  componentDidMount() {
    this.attachHandlersOnOpen();
  }

  closeOnDocumentClick = e => {
    console.log(this.ref);

    if (doesNodeContainClick(this.ref, e)) return;

    this.close();
  };

  attachHandlersOnOpen = () => {
    document.addEventListener('click', this.closeOnDocumentClick);
  };

  close = () => {
    alert('Close');
  };

  handleRef = elem => (this.ref = elem);

  render() {
    return (
      <div ref={this.handleRef}>
        <DatePickerWrapper>Календарь</DatePickerWrapper>
      </div>
    );
  }
}

export default DatePicker;
