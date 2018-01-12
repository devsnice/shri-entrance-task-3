import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';
import moment from 'moment';

import {
  HOUR_COLUMN_WIDTH,
  getPositionOfTimeFromLeftSide
} from '../../../utils/utils';

const roomEventIntervalReservedStyles = css`
  background-color: #d5dfe9;

  &:hover {
    background-color: #98a9b9;
  }

  &:focus {
    background-color: #98a9b9;
  }
`;

const RoomEventIntervalWrapper = styled(Box)`
  position: absolute;
  top: 0;
  height: 100%;
  cursor: pointer;
  left: ${props => `${props.left}px`};
  width: ${props => `${props.width}px`};

  ${props => props.reserved && roomEventIntervalReservedStyles};
`;

class FloorRoomEventInterval extends Component {
  static propTypes = {
    event: PropTypes.object.isRequired,
    reserved: PropTypes.bool
  };

  static defaultProps = {
    reserved: false
  };

  render = () => {
    const { event, reserved } = this.props;

    const durationOfEvent = moment(event.dateEnd).diff(
      event.dateStart,
      'hours',
      true
    );

    const width = HOUR_COLUMN_WIDTH * durationOfEvent;

    return (
      <RoomEventIntervalWrapper
        left={getPositionOfTimeFromLeftSide(event.dateStart)}
        width={width}
        reserved={reserved}
      />
    );
  };
}

export default FloorRoomEventInterval;
