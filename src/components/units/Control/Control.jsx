import React from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';
import Icon from '../Icons/Icon';

const arrowIconStyles = css`
  ${media.lessThan('small')`
  height: 32px;
  width: 32px;

  .icon {
    width: 14px;
    height: 14px;
  }
`};
`;

const ControlWrapper = styled(Box)`
  border: none;
  cursor: pointer;
  height: 24px;
  width: 24px;
  border-radius: 100%;
  background: #e9ecef;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus,
  &:active {
    background: #dcdfe1;

    .icon {
      opacity: 1;
    }
  }

  ${props => props.icon === 'arrow' && arrowIconStyles};
`;

class Control extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };

  render() {
    const { iconName } = this.props;

    return (
      <ControlWrapper>
        <Icon iconName={iconName} />
      </ControlWrapper>
    );
  }
}

export default Control;
