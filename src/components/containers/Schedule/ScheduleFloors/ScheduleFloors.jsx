import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import ScheduleFloor from '../ScheduleFloor/ScheduleFloor';

const Wrapper = styled(Box)`
  height: calc(100% - 47px);
  width: 100%;
  position: relative;
`;

const StagesUnderlayer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  width: 245px;
  background: #fff;
  height: 100%;

  ${media.lessThan('small')`
    display: none;
  `};
`;

class ScheduleFloors extends Component {
  static propTypes = {
    floors: PropTypes.arrayOf(
      PropTypes.shape({
        rooms: PropTypes.array.isRequired
      }).isRequired
    )
  };

  static defaultProps = {
    floors: []
  };

  renderFloors = () => {
    const { floors } = this.props;

    return floors.map(floor => (
      <ScheduleFloor key={floor.floorNumber} {...floor} />
    ));
  };

  render() {
    return (
      <Wrapper>
        <StagesUnderlayer />

        {this.renderFloors()}
      </Wrapper>
    );
  }
}

export default ScheduleFloors;
