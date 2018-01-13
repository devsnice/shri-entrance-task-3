import React, { Component } from 'react';

import Layout from '../../components/units/Layout/Layout';
import Header from '../../components/units/Header/Header';

import EventEditor from '../../components/containers/EventEditor/EventEditor';

class EventEditorPage extends Component {
  componentDidMount() {
    console.log(this.props.match.params);
  }

  render() {
    return (
      <Layout>
        <EventEditor />
      </Layout>
    );
  }
}

export default EventEditorPage;
