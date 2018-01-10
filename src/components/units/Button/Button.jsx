import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

const bigButtonStyle = css`
  height: 54px;
  line-height: 54px;
  width: 100%;
`;

const defaultButtonStyle = css`
  height: 36px;
  line-height: 36px;
  padding: 0 16px;

  ${media.lessThan('small')`
    height: 44px;
    line-height: 44px;
    padding: 0 24px;
  `};
`;

const blueButtonStyle = css`
  border-radius: 4px;
  background: #007dff;
  color: #fff;

  &:hover {
    background: #0059ff;
  }

  &:focus {
    background: #0059ff;
  }

  &:disabled {
    background: #e9ecef;
    color: rgba(#000000, 0.2);
  }
`;

const greyButtonStyle = css`
  background: #e9ecef;
  color: #000;
  border-radius: 4px;

  &:hover {
    background: #dde0e4;
  }

  &:focus {
    background: #c8cdd3;
  }

  &:disabled {
    background: #e9ecef;
    color: rgba(0, 0, 0, 0.2);
  }
`;

const warningButtonStyle = css`
  text-align: center;
  color: red;
`;

const Wrapper = styled(Box)`
  background: none;
  border: 0;
  color: inherit;
  font: inherit;
  line-height: normal;
  overflow: visible;
  padding: 0;
  -webkit-appearance: button; /* for input */
  -webkit-user-select: none; /* for button */
  -moz-user-select: none;
  -ms-user-select: none;

  font-size: 13px;
  font-family: ${props => props.theme.fontMedium};
  cursor: pointer;

  ${media.lessThan('small')`
    font-size: 15px;
  `};

  ${props => {
    switch (props.type) {
      case 'blue':
        return blueButtonStyle;
      case 'grey':
        return greyButtonStyle;
      case 'warning':
        return warningButtonStyle;
    }
  }};

  ${props => {
    switch (props.size) {
      case 'big':
        return bigButtonStyle;
      default:
        return defaultButtonStyle;
    }
  }};
`;

class Button extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['default', 'big']),
    type: PropTypes.oneOf(['blue', 'grey', 'warning']),
    styles: PropTypes.object
  };

  static defaultProps = {
    size: 'default',
    type: 'blue',
    styles: {}
  };

  render() {
    const { children, size, type, styles } = this.props;

    return (
      <Wrapper is="button" size={size} type={type} {...styles}>
        {children}
      </Wrapper>
    );
  }
}

export default Button;
