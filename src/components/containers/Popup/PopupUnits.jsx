import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const Overlay = styled(Flex)`
  width: 100%;
  height: 100%;
  background: rgba(0, 16, 33, 0.4);
  z-index: 100;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  ${media.lessThan('small')`
    align-items: flex-end;
  `};
`;

const PopupBox = styled(Box)`
  padding: 32px;
  background: #ffffff;
  box-shadow: 0 1px 16px 0 rgba(0, 44, 92, 0.28);
  border-radius: 8px;
  width: 445px;

  ${media.lessThan('small')`
    width: 100%;
    margin-bottom: 24px;
 `};
`;

const PopupIcon = styled(Box)`
  font-size: 40px;
  text-align: center;
  margin-bottom: 17px;
`;

const PopupTitle = styled(Box)`
  color: #000000;
  font-family: ${props => props.theme.fontBold};
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 320px;
  margin: 0 auto;
`;

const PopupContent = styled(Box)`
  margin-top: 8px;
`;

const PopupContentText = styled(Box)`
  margin-bottom: 8px;
  text-align: center;
`;

const PopupActions = styled(Flex)`
  margin-top: 24px;
  justify-content: center;
`;

export {
  Overlay,
  PopupBox,
  PopupIcon,
  PopupTitle,
  PopupContent,
  PopupContentText,
  PopupActions
};
