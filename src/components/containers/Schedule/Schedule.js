import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const MY_QUERY = gql`
  query {
    users {
      id
    }
  }
`;

class Schedule extends Component {
  static propTypes = {
    users: PropTypes.array
  };

  static defaultProps = {
    users: []
  };

  render() {
    return <div>Schedule</div>;
  }
}

export default graphql(MY_QUERY)(Schedule);
