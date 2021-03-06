import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from 'react-router-dom';

import { dispatch } from '../../../store/reduxStore';
import { openPopup } from '../../../store/reduxModels/popup';

import Control from '../../units/Control/Control';
import Button from '../../units/Button/Button';

import {
  EventEditorWrapper,
  HeaderTitle,
  Header,
  HeaderClose
} from './EventEditorUnits';

import EventEditorForm from './EventEditorForm/EventEditorForm';

class EditEventEditor extends Component {
  static propTypes = {
    editEvent: PropTypes.func.isRequired,
    removeEvent: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired
  };

  handleEditEvent = values => {
    this.props
      .editEvent({
        variables: {
          ...values,
          id: this.props.id
        }
      })
      .then(({ data }) => {
        // todo::add popup
        console.log('got data', data);
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  handleDeleteEvent = () => {
    dispatch(
      openPopup({
        type: 'confirmDeleteEvent',
        event: {
          id: this.props.id
        },
        actions: {
          delete: this.props.removeEvent
        }
      })
    );
  };

  formatEventDataForForm = event => {
    const timeStartHour = moment(event.dateStart).hours();
    const timeStartMinutes = moment(event.dateStart).minutes();
    const timeEndHour = moment(event.dateEnd).hours();
    const timeEndMinutes = moment(event.dateEnd).minutes();

    return {
      title: event.title,
      roomId: event.room.id,
      usersIds: event.users.map(user => user.id),
      date: event.dateStart,
      timeStart: `${timeStartHour}:${timeStartMinutes}`,
      timeEnd: `${timeEndHour}:${timeEndMinutes}`
    };
  };

  // todo::add error fetching
  getInitialValues = () => {
    const { data } = this.props;

    if (data.networkStatus === 7 && !data.error) {
      return this.formatEventDataForForm(data.event);
    } else {
      return null;
    }
  };

  render() {
    const { initialValues } = this.props;

    const formInitialValues = this.getInitialValues();

    return (
      <EventEditorWrapper>
        <Header>
          <HeaderTitle>Редактирование встречи</HeaderTitle>
          <HeaderClose>
            <Link to="/">
              <Control iconName="close" />
            </Link>
          </HeaderClose>
        </Header>

        {formInitialValues && (
          <EventEditorForm
            formType="edit"
            initialValues={formInitialValues}
            handleEditEvent={this.handleEditEvent}
            handleDeleteEvent={this.handleDeleteEvent}
          />
        )}
      </EventEditorWrapper>
    );
  }
}

const editEvent = gql`
  mutation($id: ID!, $dateStart: Date!, $dateEnd: Date!, $title: String!) {
    updateEvent(
      id: $id
      input: { title: $title, dateStart: $dateStart, dateEnd: $dateEnd }
    ) {
      id
      title
      dateStart
      dateEnd
    }
  }
`;

const removeEvent = gql`
  mutation($id: ID!) {
    removeEvent(id: $id) {
      id
    }
  }
`;

const EventForEditingQuery = gql`
  query($id: ID!) {
    event(id: $id) {
      dateStart
      dateEnd
      title
      id
      room {
        id
      }
      users {
        id
      }
    }
  }
`;

export default compose(
  graphql(editEvent, { name: 'editEvent' }),
  graphql(removeEvent, { name: 'removeEvent' }),
  graphql(EventForEditingQuery, { name: 'data' })
)(EditEventEditor);
