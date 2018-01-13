import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import Icon from '../Icons/Icon';

const SelectedBox = styled(Box)`
  background: #e9ecef;
  border-radius: 16px;
  height: 24px;
  position: relative;
  display: inline-block;
  margin-right: 8px;
  margin-bottom: 8px;

  ${media.lessThan('small')`
    width: 100%;
    height: 32px;
  `};
`;

const SelectedAvatar = styled.img`
  float: left;
  height: 24px;
  width: 24px;
  border-radius: 100%;

  ${media.lessThan('small')`
    width: 32px;
    height: 32px;
  `};
`;

const SelectedName = styled.span`
  font-size: 13px;
  padding: 0 36px 0 8px;
  line-height: 24px;

  ${media.lessThan('small')`
    font-size: 15px;
    line-height: 32px;
  `};
`;

const SelectedClose = styled.div`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;

  ${media.lessThan('small')`
    right: 14px;
  `};
`;

class MultiselectSelectedUser extends React.Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    handleRemove: PropTypes.func.isRequired
  };

  handleRemoveUser = () => {
    const { item } = this.props;

    this.props.handleRemove(item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <SelectedBox>
        <SelectedAvatar src={item.avatarUrl} />
        <SelectedName>{item.login}</SelectedName>

        <SelectedClose onClick={this.handleRemoveUser}>
          <Icon iconName="close" />
        </SelectedClose>
      </SelectedBox>
    );
  }
}

export default MultiselectSelectedUser;
