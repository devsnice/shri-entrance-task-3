import React, { Component } from 'react';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const ScheduleWrapper = styled(Box)`
  height: calc(100% - 72px);
  width: 100%;

  ${media.lessThan('small')`
    height: calc(100% - 48px);
  `};
`;

const ScheduleTimeline = styled(Box)`
  width: 100%;
  height: 100%;
  max-width: 1280px;
  background: #f6f7f9;
  overflow-x: scroll;
  overflow-y: visible;
  position: relative;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan('small')`
    height: calc(100% - 56px);
  `};
`;

const ScheduleDatepickerMobile = styled(Box)`
  display: none;

  ${media.lessThan('small')`
    display: block;
  `};
`;

const ScheduleNav = styled(Box)`
  border-bottom: 1px solid #e9ecef;
  width: 1280px;
`;

const ScheduleNavContent = styled(Box)`
  background: #fff;
  height: 46px;
`;

const ScheduleNavContentDate = styled(Box)`
  width: 245px;
  padding: 0 24px 0 0;

  ${media.lessThan('small')`
    display: none;
  `};
`;

const ScheduleNavContentTimeline = styled(Box)`
  ${media.lessThan('small')`
    width: 1280px;
    height: 32px;
    border-top: 1px solid #e9ecef;
    background: #fff;
  `};
`;

export {
  ScheduleWrapper,
  ScheduleDatepickerMobile,
  ScheduleTimeline,
  ScheduleNav,
  ScheduleNavContent,
  ScheduleNavContentDate,
  ScheduleNavContentTimeline
};
