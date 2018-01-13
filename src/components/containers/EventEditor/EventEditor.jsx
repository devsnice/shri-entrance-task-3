import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import { Link } from 'react-router-dom';

import Control from '../../units/Control/Control';
import Button from '../../units/Button/Button';

import {
  EventEditorWrapper,
  HeaderTitle,
  Header,
  HeaderClose,
  Body,
  BodyColumn,
  BodyColumnMobile,
  BodyColumnDesktop,
  EditorControls,
  EditorControlsButtons
} from './EventEditorUnits';

class EventEditor extends Component {
  static propTypes = {
    createEvent: PropTypes.func.isRequired
  };

  handleCreateEvent = () => {
    console.log('click');

    this.props
      .createEvent({
        variables: {
          title: 'New event',
          dateStart: '2018-01-13T10:49:37.008Z',
          dateEnd: '2018-01-13T14:49:37.008Z',
          usersIds: ['1'],
          roomId: '1'
        }
      })
      .then(({ data }) => {
        console.log('got data', data);
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
            <Control iconName="close" />
          </HeaderClose>
        </Header>

        <Body>
          <BodyColumn>Input</BodyColumn>
          <BodyColumn hasBorderOnMobile>Date and time</BodyColumn>
          <BodyColumn hasBorderOnMobile>Мултиселект</BodyColumn>
          <BodyColumn hasBorderOnMobile>Рекомендации</BodyColumn>
        </Body>

        <EditorControls>
          <EditorControlsButtons>
            <Link to="/">
              <Button type="grey" styles={{ mr: '16px' }}>
                Отмена
              </Button>
            </Link>

            <Button onClick={this.handleCreateEvent}>Создать встречу</Button>
          </EditorControlsButtons>
        </EditorControls>
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
    }
  }
`;

// const editEvent = gql`
//   mutation($dateStart: Date, $dateEnd: Date, $title: String) {
//     updateEvent(
//       input: { title: $title, dateStart: $dateStart, dateEnd: $dateEnd }
//     ) {
//       id
//       title
//       dateStart
//       dateEnd
//     }
//   }
// `;

export default compose(
  graphql(createEvent, { name: 'createEvent' })
  //graphql(editEvent, { name: 'editEvent' })
)(EventEditor);
