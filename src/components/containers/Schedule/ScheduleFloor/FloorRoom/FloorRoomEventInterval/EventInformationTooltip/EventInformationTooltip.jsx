import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Link } from 'react-router-dom';

import { Box } from 'grid-styled';

import { formatTime } from '../../../../utils/timeUtils';
import withCloseOnOutsideClick from '../../../../../../hocs/withCloseOnOutsideClick';

import Control from '../../../../../../units/Control/Control';
import Person from '../../../../../../units/Person/Person';

import {
  Tooltip,
  TooltipTriangle,
  TooltipControl,
  TooltipInfo,
  TooltipTitle,
  TooltipDescription,
  TooltipPeople,
  TooltipPeopleRest
} from './EventInformationTooltipUnits';

//  14 декабря, 15:00—17:00
const formatEventPeriodTime = (dateStart, dateEnd) => {
  const date = moment(dateStart).format('D MMMM');
  const timePeriod = `${formatTime(dateStart)} — ${formatTime(dateEnd)}`;

  return `${date}, ${timePeriod}`;
};

// TODO: separate tooltips

class EventInformationTooltip extends React.Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    event: PropTypes.object.isRequired
  };

  render() {
    const { isOpen, event } = this.props;

    return (
      <Tooltip open={isOpen}>
        <TooltipTriangle />
        <TooltipControl>
          <Link to={`/eventEditor/${event.id}`}>
            <Control iconName="edit" />
          </Link>
        </TooltipControl>

        <Box>
          <TooltipInfo>
            <TooltipTitle>{event.title}</TooltipTitle>
            <TooltipDescription>
              {formatEventPeriodTime(event.dateStart, event.dateEnd)}
              {` · `}
              {event.roomTitle}
            </TooltipDescription>
          </TooltipInfo>

          <TooltipPeople>
            <Person {...event.users[0]} />

            {event.users.length > 1 && (
              <TooltipPeopleRest>
                и {event.users.length - 1} участников
              </TooltipPeopleRest>
            )}
          </TooltipPeople>
        </Box>
      </Tooltip>
    );
  }
}

export default withCloseOnOutsideClick(EventInformationTooltip);
