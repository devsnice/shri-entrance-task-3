import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import { Box } from 'grid-styled';

import Label from '../../../../units/Label/Label';

import RecommendationRoom from './RecommendationRoom/RecommendationRoom';

const RoomsQuery = gql`
  query {
    rooms {
      id
      title
      capacity
      floor
    }
  }
`;

class RecommendationRooms extends Component {
  static propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: null
  };

  handleSelectItem = id => {
    const { name } = this.props;

    this.props.handleChange(name, id);
  };

  handleRemoveSelection = id => {};

  // TODO: add error fetching, move this logic outside
  getRoomsList = () => {
    const { data } = this.props;

    if (data.networkStatus === 7 && !data.error) {
      return data.rooms;
    }

    return [];
  };

  findRecommendations = () => {
    const allRooms = this.getRoomsList();

    return allRooms;
  };

  renderRecommendations = rooms => {
    return rooms.map(room => (
      <RecommendationRoom
        isActive={room.id === this.props.value}
        handleSelectItem={this.handleSelectItem}
        handleRemoveSelection={this.handleRemoveSelection}
        key={room.id}
        room={room}
      />
    ));
  };

  render() {
    const recommendationRoomsList = this.findRecommendations();

    if (!recommendationRoomsList.length) {
      return null;
    }

    return (
      <Box>
        <Label label="Рекомендованные переговорки" />
        {this.renderRecommendations(recommendationRoomsList)}
      </Box>
    );
  }
}

export default graphql(RoomsQuery)(RecommendationRooms);
