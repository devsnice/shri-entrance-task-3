import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

const ScheduleGridWrapper = styled(Box)`
  position: absolute;
  height: calc(100% - 47px);
`;

const ScheduleGridTable = styled(Box)`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 245px;
  top: 0;

  ${media.lessThan('small')`
    left: 145px;
  `};
`;

const ScheduleGridHourLine = styled(Box)`
  position: absolute;
  height: 100%;
  width: 1px;
  background-color: rgba(19, 100, 205, 0.1);
  top: 0;
  z-index: 10;
  left: ${props => `${props.left}px`};
`;

const ScheduleGridHourLegend = styled.span`
  position: absolute;
  bottom: 100%;
  margin-bottom: 16px;
  font-size: 11px;
  transform: translateX(-50%);
  font-family: $fontBold;
  letter-spacing: 0.4px;
  color: #252525;

  ${media.lessThan('small')`
    margin-bottom: 10px;
  `};
`;

const ScheduleGridCurrentTimeLegend = styled(ScheduleGridHourLegend)`
  height: 20px;
  line-height: 20px;
  width: 49px;
  text-align: center;
  color: #fff;
  background: #007dff;
  border-radius: 100px;
  margin-bottom: 0;

  ${media.lessThan('small')`
    margin-bottom: 0;
  `};
`;

const ScheduleGridCurrentTimeLine = styled(ScheduleGridHourLine)`
  background-color: #007dff;
  height: calc(100% + 12px);
  top: -12px;

  ${media.lessThan('small')`
    height: calc(100% + 6px);
    top: -6px;
  `};
`;

export {
  ScheduleGridWrapper,
  ScheduleGridTable,
  ScheduleGridHourLine,
  ScheduleGridHourLegend,
  ScheduleGridCurrentTimeLegend,
  ScheduleGridCurrentTimeLine
};
