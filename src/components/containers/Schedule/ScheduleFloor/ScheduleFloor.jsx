import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import FloorRoom from './FloorRoom/FloorRoom';

const Wrapper = styled(Box)`
  position: relative;
  padding-top: 21px;
`;

const FloorLabel = styled(Box)`
  font-family: ${props => props.theme.fontBold};
  font-size: 11px;
  color: #858e98;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  position: relative;
  will-change: left;

  ${media.lessThan('small')`
    padding-left: 16px;
  `};
`;

const FloorRooms = styled(Box)`
  margin-top: 8px;
`;

class ScheduleFloor extends Component {
  static propTypes = {
    floorNumber: PropTypes.number.isRequired,
    rooms: PropTypes.arrayOf(
      PropTypes.shape({
        events: PropTypes.array.isRequired,
        title: PropTypes.string.isRequired,
        capacity: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  };

  static defaultProps = {};

  renderRooms = () => {
    const { rooms } = this.props;

    return rooms.map(room => <FloorRoom key={room.id} {...room} />);
  };

  render() {
    const { floorNumber } = this.props;

    return (
      <Wrapper>
        <FloorLabel>{`${floorNumber} Этаж`}</FloorLabel>
        <FloorRooms>{this.renderRooms()}</FloorRooms>
      </Wrapper>
    );
  }
}

export default ScheduleFloor;
