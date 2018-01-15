import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';
import Icon from '../../../../../units/Icons/Icon';

const cssRecommendationDefault = css`
  background: #e9ecef;
  color: #000;

  &:hover {
    background: #dde0e4;
  }

  &:focus {
    background: #c8cdd3;
  }
`;

const cssRecommendationActive = css`
  background: #007dff;
  color: #fff;

  &:hover {
    background: #0059ff;
  }

  &:focus {
    background: #0059ff;
  }
`;

const RecommendationBox = styled(Box)`
  ${props =>
    props.active ? cssRecommendationActive : cssRecommendationDefault};

  cursor: pointer;
  border-radius: 4px;
  height: 37px;
  line-height: 37px;
  margin-bottom: 8px;
  padding: 0 10px;
  position: relative;
  width: 100%;
  text-align: left;

  ${media.lessThan('small')`
    height: 44px;
    line-height: 44px;
  `};
`;

const RecommendationData = styled(Box)`
  font-size: 13px;

  ${media.lessThan('small')`
    font-size: 15px;
 `};
`;

const RecommendationRoomTime = styled.span`
  font-family: ${props => props.theme.fontBold};
  margin-right: 16px;
  display: inline-block;
`;

const RecommendationRoomName = styled.span`
  font-family: ${props => props.theme.fontDefault};
`;

const RecommendationRoomRemove = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

class RecommendationRoom extends Component {
  static propTypes = {
    isActive: PropTypes.bool.isRequired,
    room: PropTypes.object.isRequired,
    handleSelectItem: PropTypes.func.isRequired,
    handleRemoveSelection: PropTypes.func.isRequired
  };

  handleSelectItem = () => {
    this.props.handleSelectItem(this.props.room.id);
  };

  // todo::add recommendation logic,
  //  <RecommendationRoomTime>10:00 - 11:00</RecommendationRoomTime>
  render() {
    const { room, isActive } = this.props;

    return (
      <RecommendationBox onClick={this.handleSelectItem} active={isActive}>
        <RecommendationData>
          <RecommendationRoomName>
            {`${room.title} · ${room.floor} этаж`}
          </RecommendationRoomName>

          {isActive && (
            <RecommendationRoomRemove onClick={this.handleRemoveSelection}>
              <Icon iconName="close" />
            </RecommendationRoomRemove>
          )}
        </RecommendationData>
      </RecommendationBox>
    );
  }
}

export default RecommendationRoom;
