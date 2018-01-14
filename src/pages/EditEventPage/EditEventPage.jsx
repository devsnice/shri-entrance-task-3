import React, { Component } from 'react';

import Layout from '../../components/units/Layout/Layout';
import Header from '../../components/units/Header/Header';

import EditEventEditor from '../../components/containers/EventEditor/EditEventEditor';

class EditEventPage extends Component {
  render() {
    return (
      <Layout>
        <EditEventEditor id={this.props.match.params.id} />
      </Layout>
    );
  }
}

export default EditEventPage;
