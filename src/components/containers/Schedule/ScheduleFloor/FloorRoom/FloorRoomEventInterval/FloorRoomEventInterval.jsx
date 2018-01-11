import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';
import moment from 'moment';

import { getPositionOfTimeFromLeftSide } from '../../../utils/utils';

const roomEventIntervalReservedStyles = css`
  background-color: #d5dfe9;
  width: 250px;

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

    return (
      <RoomEventIntervalWrapper
        left={getPositionOfTimeFromLeftSide(event.dateStart)}
        reserved={reserved}
      />
    );
  };
}

export default FloorRoomEventInterval;
