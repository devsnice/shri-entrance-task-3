import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ScheduleFloors from '../ScheduleFloors/ScheduleFloors';

const EventsOfPeriodQuery = gql`
  query($dateStart: Date, $dateEnd: Date) {
    events(dateStart: $dateStart, dateEnd: $dateEnd) {
      id
      title
      dateStart
      dateEnd
      users {
        id
        login
        avatarUrl
      }
      room {
        id
        title
        floor
        capacity
      }
    }
  }
`;

class ScheduleFloorsGraphQLRequest extends Component {
  static propTypes = {
    dateStart: PropTypes.string.isRequired,
    dateEnd: PropTypes.string.isRequired
  };

  /*
      Transform our graphQL result to the convenient structure

      floors {
        [floorNumber]: {
          rooms: {
            [roomTitle]: {
              events: [{
                ...Event,
                roomTitle
              }],
              ...roomInformation
            }
          },
          floorNumber
        }
      }

  */

  transformEventsToFloorsHashTable = events => {
    const floors = {};

    events.forEach(event => {
      const { room, ...restEventData } = event;

      // Create a new floor, if there is the first event on this floor
      if (!floors[room.floor]) {
        floors[room.floor] = {
          floorNumber: room.floor,
          rooms: {
            [room.title]: {
              events: [
                {
                  ...restEventData,
                  roomTitle: room.title
                }
              ],
              ...event.room
            }
          }
        };
      } else {
        // Create a new room, if there is the first event in this room
        if (!floors[room.floor].rooms[room.title]) {
          floors[room.floor] = {
            ...floors[room.floor],
            rooms: {
              ...floors[room.floor].rooms,
              [room.title]: {
                events: [
                  {
                    ...restEventData,
                    roomTitle: room.title
                  }
                ],
                ...room
              }
            }
          };
          // Save event in the existed room on the existed floor
        } else {
          floors[room.floor] = {
            ...floors[room.floor],
            rooms: {
              ...floors[room.floor].rooms,
              [room.title]: {
                ...floors[room.floor].rooms[room.title],
                events: [
                  ...floors[room.floor].rooms[room.title].events,
                  restEventData
                ]
              }
            }
          };
        }
      }
    });

    return floors;
  };

  /*
      Transform hash table of Floors to Array

      floors [{
        rooms: [
          [
            events: [Event],
            ...roomInformation
          ]
        ],
        floorNumber
      }]

  */

  transformFloorsHashTableToArray = floorsHashTable => {
    const floorsArray = Object.keys(floorsHashTable).map(floorNumber => {
      const floor = floorsHashTable[floorNumber];

      const floorRoomsArray = Object.keys(floor.rooms).map(
        roomTitle => floor.rooms[roomTitle]
      );

      floor.rooms = floorRoomsArray;

      return floor;
    });

    return floorsArray;
  };

  getFloorsOfEvents = () => {
    const { data } = this.props;

    // TODO: loader, error fetching
    if (data.networkStatus === 7 && !data.error) {
      const hashTableOfFloors = this.transformEventsToFloorsHashTable(
        data.events
      );
      const arrayOfFloors = this.transformFloorsHashTableToArray(
        hashTableOfFloors
      );

      return arrayOfFloors;
    } else {
      return [];
    }
  };

  render() {
    return <ScheduleFloors floors={this.getFloorsOfEvents()} />;
  }
}

export default graphql(EventsOfPeriodQuery, {
  options: ({ dateStart, dateEnd }) => ({
    variables: {
      dateStart,
      dateEnd
    }
  })
})(ScheduleFloorsGraphQLRequest);
