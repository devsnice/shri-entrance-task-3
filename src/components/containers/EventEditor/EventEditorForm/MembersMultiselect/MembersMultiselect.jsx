import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Multiselect from '../../../../units/Multiselect/Multiselect';

import { Box } from 'grid-styled';

const MembersQuery = gql`
  query {
    users {
      id
      login
      avatarUrl
      homeFloor
    }
  }
`;

class MembersMultiselect extends Component {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired
  };

  // TODO: add error fetching, move this logic outside
  getUsersList = () => {
    const { data } = this.props;

    if (data.networkStatus === 7 && !data.error) {
      return data.users;
    }
  };

  render() {
    const { handleOnChange } = this.props;

    return (
      <Multiselect
        label="Участники"
        list={this.getUsersList()}
        handleOnChange={handleOnChange}
      />
    );
  }
}

export default graphql(MembersQuery)(MembersMultiselect);
