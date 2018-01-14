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

class CreateEventEditor extends Component {
  static propTypes = {
    createEvent: PropTypes.func.isRequired
  };

  handleCreateEvent = values => {
    this.props
      .createEvent({
        variables: values
      })
      .then(({ data }) => {
        // check validation errors
        dispatch(
          openPopup({
            type: 'eventCreated',
            event: data.createEvent
          })
        );
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  render() {
    return (
      <EventEditorWrapper>
        <Header>
          <HeaderTitle>Новая встреча</HeaderTitle>
          <HeaderClose>
            <Link to="/">
              <Control iconName="close" />
            </Link>
          </HeaderClose>
        </Header>

        <EventEditorForm
          formType="new"
          handleCreateEvent={this.handleCreateEvent}
        />
      </EventEditorWrapper>
    );
  }
}

const createEvent = gql`
  mutation(
    $dateStart: Date!
    $dateEnd: Date!
    $title: String!
    $usersIds: [ID]
    $roomId: ID!
  ) {
    createEvent(
      input: { title: $title, dateStart: $dateStart, dateEnd: $dateEnd }
      usersIds: $usersIds
      roomId: $roomId
    ) {
      id
      title
      dateStart
      dateEnd
      room {
        title
        floor
      }
    }
  }
`;

export default compose(graphql(createEvent, { name: 'createEvent' }))(
  CreateEventEditor
);
