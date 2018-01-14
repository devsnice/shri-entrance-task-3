import React, { Component } from 'react';

import Layout from '../../components/units/Layout/Layout';
import Header from '../../components/units/Header/Header';

import CreateEventEditor from '../../components/containers/EventEditor/CreateEventEditor';

class CreateEventPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }

  render() {
    return (
      <Layout>
        <CreateEventEditor />
      </Layout>
    );
  }
}

export default CreateEventPage;
