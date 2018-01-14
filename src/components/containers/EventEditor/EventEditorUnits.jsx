import React, { Component } from 'react';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const EventEditorWrapper = styled(Box)`
  padding: 32px 0;
  width: 876px;
  margin-bottom: 75px;
  margin: 0 auto;

  ${media.lessThan('small')`
  width: 100%;
  padding: 24px 0;
`};
`;

const HeaderTitle = styled(Box)`
  font-family: ${props => props.theme.fontBold};
  font-size: 20px;
  margin-bottom: 20px;
`;

const Header = styled(Flex).attrs({
  justify: 'space-between'
})`
  ${media.lessThan('small')`
  padding: 0 16px;
`};
`;

const HeaderClose = styled(Box)`
  ${media.lessThan('small')`
    display: none;
`};
`;

const EditorControls = styled(Box)`
  background: #ffffff;
  border-top: 1px solid #e9ecef;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 75px;
  width: 100%;
`;

const EditorControlsButtons = styled(Flex).attrs({
  align: 'center'
})`
  height: 100%;
  justify-content: center;

  ${media.lessThan('small')`
  justify-content: flex-end;
  padding: 0 16px;
`};
`;

export {
  EventEditorWrapper,
  HeaderTitle,
  Header,
  HeaderClose,
  EditorControls,
  EditorControlsButtons
};
