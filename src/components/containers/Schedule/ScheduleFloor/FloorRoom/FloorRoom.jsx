import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';
import moment from 'moment';

import FloorRoomEventInterval from './FloorRoomEventInterval/FloorRoomEventInterval';

const RoomDescription = styled(Box)`
  width: 245px;

  ${media.lessThan('small')`
    width: 181px;
    background: #fff;
    height: 58px;
    padding: 12px 25px 0 16px;
  `};
`;

const RoomLabel = styled(Box)`
  font-family: ${props => props.theme.fontMedium};
  font-size: 15px;
  line-height: 17px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-bottom: 2px;
`;

const RoomCapacity = styled(Box)`
  font-size: 13px;
  line-height: 17px;
`;

const RoomSchedule = styled(Box)`
  height: 28px;
  background: #fff;
  width: calc(100% - 245px);
  position: relative;

  ${media.lessThan('small')`
    height: 58px;
    width: calc(100% - 145px);
  `};
`;

const Wrapper = styled(Flex)`
  margin-bottom: 16px;
  width: 1280px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    ${RoomLabel} {
      color: #0070e0;
    }
  }
`;

class FloorRoom extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    events: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired
  };

  renderEventsInRoom = () => {
    const { events } = this.props;

    return events.map(event => (
      <FloorRoomEventInterval key={event.id} event={event} reserved />
    ));
  };

  render() {
    const { title, capacity } = this.props;

    return (
      <Wrapper>
        <RoomDescription>
          <RoomLabel>{title}</RoomLabel>
          <RoomCapacity>до {`${capacity} человек`}</RoomCapacity>
        </RoomDescription>

        <RoomSchedule>{this.renderEventsInRoom()}</RoomSchedule>
      </Wrapper>
    );
  }
}

export default FloorRoom;
