import React from 'react';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const Tooltip = styled(Box)`
  background: #ffffff;
  box-shadow: 0 1px 16px 0 rgba(0, 44, 92, 0.28);
  border-radius: 8px;
  cursor: default;
  position: absolute;
  padding: 17px 16px 16px;
  top: 100%;
  left: calc(50% - 168px);
  width: 338px;
  z-index: 10;
  display: ${props => (props.open ? 'block' : 'none')};

  ${media.lessThan('small')`
  width: 360px;
  left: calc(50% - 180px);
`};
`;

const TooltipTriangle = styled(Box)`
  border-style: solid;
  border-width: 0 8px 8px 8px;
  border-color: transparent transparent #ffffff transparent;
  position: absolute;
  top: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  z-index: 11;
  height: 0;
  width: 0;
`;

const TooltipControl = styled(Box)`
  position: absolute;
  top: 16px;
  right: 16px;
`;

const TooltipInfo = styled(Box)`
  margin-bottom: 16px;
`;

const TooltipTitle = styled(Box)`
  font-family: ${props => props.theme.fontBold};
  font-size: 15px;
  color: #000000;
  line-height: 24px;
  margin-bottom: 2px;

  ${media.lessThan('small')`
  font-size: 20px;
  margin-bottom: 8px;
`};
`;

const TooltipDescription = styled(Box)`
  font-size: 13px;
  color: #000000;
  line-height: 17px;

  ${media.lessThan('small')`
  font-size: 15px;
`};
`;

const TooltipPeople = styled(Flex)`
  line-height: 24px;
`;

const TooltipPeopleRest = styled.span`
  color: #858e98;
  font-size: 13px;
  margin-left: 3px;

  ${media.lessThan('small')`
    font-size: 15px;
  `};
`;

export {
  Tooltip,
  TooltipTriangle,
  TooltipControl,
  TooltipInfo,
  TooltipTitle,
  TooltipDescription,
  TooltipPeople,
  TooltipPeopleRest
};
