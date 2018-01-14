import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import { Link } from 'react-router-dom';
import Button from '../../../../units/Button/Button';

import {
  PopupBox,
  PopupIcon,
  PopupTitle,
  PopupContent,
  PopupContentText,
  PopupActions
} from '../../PopupUnits';

class PopupEventCreated extends Component {
  static propTypes = {
    handleClosePopup: PropTypes.func.isRequired,
    event: PropTypes.object
  };

  static defaultProps = {
    event: {
      room: {}
    }
  };

  render() {
    const { event } = this.props;

    // todo::refactoring
    const eventDate = moment(event.dateStart).format('D MMMM');
    const eventStartHours = moment(event.dateStart).hours();
    const eventStartMinutes = moment(event.dateStart).minutes();
    const eventEndHours = moment(event.dateEnd).hours();
    const eventEndMinutes = moment(event.dateEnd).minutes();

    return (
      <PopupBox>
        <PopupIcon>🎉</PopupIcon>

        <PopupTitle>Встреча создана!</PopupTitle>

        <PopupContent>
          <PopupContentText>
            {eventDate},
            {eventStartHours}:{eventStartMinutes}
            —
            {eventEndHours}:{eventEndMinutes}
          </PopupContentText>
          <PopupContentText>
            {event.room.title} · {event.room.floor} этаж
          </PopupContentText>
        </PopupContent>

        <PopupActions>
          <Button onClick={this.props.handleClosePopup} styleType="blue">
            Хорошо
          </Button>
        </PopupActions>
      </PopupBox>
    );
  }
}

export default PopupEventCreated;
