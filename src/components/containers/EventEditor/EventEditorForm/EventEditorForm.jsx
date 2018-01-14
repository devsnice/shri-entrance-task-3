import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {
  Body,
  BodyColumn,
  BodyColumnMobile,
  BodyColumnDesktop,
  InputContainer,
  DateInputContainer,
  TimeInputContainer,
  TimePeriodInputContainer,
  BodyFieldsRow,
  TimeInputDivider
} from './EventEditorFormUnits';

import { Formik } from 'formik';

import { Link } from 'react-router-dom';

import Icon from '../../../units/Icons/Icon';
import Input from '../../../units/Input/Input';
import Button from '../../../units/Button/Button';

import MembersMultiselect from './MembersMultiselect/MembersMultiselect';
import DatePicker from '../../../units/DatePicker/DatePicker';
import RecommendationRooms from './RecommendationRooms/RecommendationRooms';

import { EditorControls, EditorControlsButtons } from '../EventEditorUnits';

class EventEditorForm extends Component {
  static propTypes = {
    handleCreateEvent: PropTypes.func.isRequired,
    initialValues: PropTypes.object
  };

  static defaultProps = {
    initialValues: {}
  };

  /*
    mutation(
      $dateStart: Date!
      $dateEnd: Date!
      $title: String!
      $usersIds: [ID]
      $roomId: ID!
    )
  */

  prepareFormValues = ({
    title,
    date,
    timeStart,
    timeEnd,
    roomId,
    usersIds
  }) => {
    const [timeStartHours, timeStartMinutes] = timeStart.split(':');
    const [timeEndHours, timeEndMinutes] = timeEnd.split(':');

    const dateStart = moment(date)
      .hours(timeStartHours)
      .minutes(timeStartMinutes)
      .seconds(0)
      .toString();

    const dateEnd = moment(date)
      .hours(timeEndHours)
      .minutes(timeEndMinutes)
      .seconds(0)
      .toString();

    return {
      title,
      dateStart,
      dateEnd,
      roomId,
      usersIds
    };
  };

  createEvent = (values, actions) => {
    const preparedValues = this.prepareFormValues(values);

    this.props.handleCreateEvent(preparedValues);
  };

  render() {
    const { initialValues } = this.props;

    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.createEvent}
        render={({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
          isSubmitting
        }) => (
          <Body>
            <BodyColumn>
              <InputContainer>
                <Input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  label="Тема"
                  placeholder="О чём будете говорить?"
                />
              </InputContainer>
            </BodyColumn>

            <BodyColumn hasBorderOnMobile>
              <BodyFieldsRow>
                <DateInputContainer>
                  <DatePicker
                    type="date"
                    name="date"
                    value={values.date}
                    handleChange={setFieldValue}
                  />
                </DateInputContainer>

                <TimePeriodInputContainer>
                  <TimeInputContainer>
                    <Input
                      type="text"
                      name="timeStart"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.timeStart}
                      label="Начало"
                      placeholder="Начало в"
                    />
                  </TimeInputContainer>

                  <TimeInputDivider>
                    <span>—</span>
                  </TimeInputDivider>

                  <TimeInputContainer>
                    <Input
                      type="text"
                      name="timeEnd"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.timeEnd}
                      label="Конец"
                      placeholder="Конец в"
                    />
                  </TimeInputContainer>
                </TimePeriodInputContainer>
              </BodyFieldsRow>
            </BodyColumn>

            <BodyColumn hasBorderOnMobile>
              <InputContainer>
                <MembersMultiselect
                  name="usersIds"
                  value={values.members}
                  handleChange={setFieldValue}
                />
              </InputContainer>
            </BodyColumn>

            <BodyColumn hasBorderOnMobile>
              <RecommendationRooms
                name="roomId"
                value={values.roomId}
                handleChange={setFieldValue}
              />
            </BodyColumn>

            <EditorControls>
              <EditorControlsButtons>
                <Link to="/">
                  <Button styleType="grey" styles={{ mr: '16px' }}>
                    Отмена
                  </Button>
                </Link>

                <Button onClick={handleSubmit} styleType="blue" type="submit">
                  Создать встречу
                </Button>
              </EditorControlsButtons>
            </EditorControls>
          </Body>
        )}
      />
    );
  }
}

export default EventEditorForm;
