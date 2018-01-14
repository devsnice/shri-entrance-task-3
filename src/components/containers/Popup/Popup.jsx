import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Overlay } from './PopupUnits';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { closePopup } from '../../../store/reduxModels/popup';

// Popups
import PopupEventCreated from './Components/PopupEventCreated/PopupEventCreated';
import PopupConfirmEventDelete from './Components/PopupConfirmEventDelete/PopupConfirmEventDelete';

const getPopupComponentByType = type => {
  switch (type) {
    case 'eventCreated':
      return PopupEventCreated;
    case 'confirmDeleteEvent':
      return PopupConfirmEventDelete;

    default:
      return null;
  }
};

class Popup extends Component {
  static propTypes = {
    event: PropTypes.object,
    type: PropTypes.string
  };

  static defaultProps = {
    type: null,
    event: {}
  };

  handleClosePopup = () => {
    this.props.actions.closePopup();
  };

  render() {
    const { type, event } = this.props;

    const PopupComponent = getPopupComponentByType(type);

    if (!PopupComponent) return null;

    return (
      <Overlay>
        <PopupComponent
          event={event}
          handleClosePopup={this.handleClosePopup}
        />
      </Overlay>
    );
  }
}

function mapStateToProps(state) {
  return { type: state.type, event: state.event };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators({ closePopup }, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
