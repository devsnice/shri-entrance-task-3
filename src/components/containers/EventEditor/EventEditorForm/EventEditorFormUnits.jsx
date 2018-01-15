import React, { Component } from 'react';

import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const Body = styled(Flex).attrs({
  justify: 'space-between'
})`
  flex-wrap: wrap;

  ${media.lessThan('small')`
  flex-direction: column;
`};
`;

const cssBodyColumnMobileBorder = css`
  ${media.lessThan('small')`
    border-color: #e9ecef;
    border-style: solid;
    border-top-width: 0;
    border-bottom-width: 8px;
    border-left-width: 0;
    border-right-width: 0;
    padding-bottom: 16px;
  `};
`;

const BodyColumn = styled(Box)`
  width: 420px;
  margin-bottom: 24px;

  ${media.lessThan('small')`
  width: 100%;
  margin-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
`};

  ${props => props.hasBorderOnMobile && cssBodyColumnMobileBorder};
`;

const BodyColumnMobile = styled(BodyColumn)`
  display: none;

  ${media.lessThan('small')`
    display: block;
  `};
`;

const BodyColumnDesktop = styled(BodyColumn)`
  ${media.lessThan('small')`
    display: none;
  `};
`;

const InputContainer = styled(Box)`
  flex-grow: 0;
  flex-shrink: 0;
`;

const DateInputContainer = styled(InputContainer)`
  flex-basis: 238px;
  margin-right: 16px;

  ${media.lessThan('small')`
    margin-right: 0;
  `};
`;

const TimeInputContainer = styled(InputContainer)`
  flex-basis: 72px;

  ${media.lessThan('small')`
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
  `};
`;

const TimePeriodInputContainer = styled(Flex)`
  align-items: flex-end;

  ${media.lessThan('small')`
    margin-top: 8px;
  `};
`;

const TimeInputDivider = styled(InputContainer)`
  font-family: ${props => props.theme.fontBold};
  font-size: 13px;
  letter-spacing: 0.47px;
  margin: 0 4px;
  text-align: center;
  line-height: 38px;
  height: 38px;
`;

const BodyFieldsRow = styled.div`
  border: none;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('small')`
    display: block;
  `};
`;

export {
  Body,
  BodyColumn,
  BodyColumnMobile,
  BodyColumnDesktop,
  BodyFieldsRow,
  InputContainer,
  DateInputContainer,
  TimeInputContainer,
  TimeInputDivider,
  TimePeriodInputContainer
};
