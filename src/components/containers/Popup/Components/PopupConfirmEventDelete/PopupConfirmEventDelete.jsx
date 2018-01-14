import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Button from '../../../../units/Button/Button';

import {
  PopupBox,
  PopupIcon,
  PopupTitle,
  PopupActions
} from '../../PopupUnits';

class PopupConfirmEventDelete extends Component {
  static propTypes = {
    handleClosePopup: PropTypes.func.isRequired,
    event: PropTypes.object
  };

  static defaultProps = {
    event: {}
  };

  confirmRemoveEvent = () => {};

  render() {
    return (
      <PopupBox>
        <PopupIcon>🙅🏻</PopupIcon>

        <PopupTitle>Встреча будет удалена безвозвратно</PopupTitle>

        <PopupActions>
          <Button
            onClick={this.props.handleClosePopup}
            styleType="grey"
            styles={{ mr: '16px' }}
          >
            Отмена
          </Button>

          <Button onClick={this.confirmRemoveEvent} styleType="grey">
            Удалить
          </Button>
        </PopupActions>
      </PopupBox>
    );
  }
}

export default PopupConfirmEventDelete;
