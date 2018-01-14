import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Button from '../../../../units/Button/Button';

import { Box } from 'grid-styled';

import {
  PopupBox,
  PopupIcon,
  PopupTitle,
  PopupActions
} from '../../PopupUnits';

class PopupConfirmEventDelete extends Component {
  static propTypes = {
    handleClosePopup: PropTypes.func.isRequired,
    event: PropTypes.object,
    actions: PropTypes.object
  };

  static defaultProps = {
    event: {},
    actions: {}
  };

  state = {
    isRemoved: false
  };

  // todo::refactoring
  confirmRemoveEvent = () => {
    this.props.actions
      .delete({
        variables: {
          id: this.props.event.id
        }
      })
      .then(({ data }) => {
        {
          this.setState({
            isRemoved: true
          });
        }
      })
      .catch(error => {
        console.log('there was an error sending the query', error);
      });
  };

  render() {
    return (
      <PopupBox>
        <PopupIcon>🙅🏻</PopupIcon>

        {!this.state.isRemoved && (
          <Box>
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
          </Box>
        )}

        {this.state.isRemoved && (
          <Box>
            <PopupTitle>Встреча успешно удалена</PopupTitle>

            <PopupActions>
              <Button
                onClick={this.props.handleClosePopup}
                styleType="blue"
                styles={{ mr: '16px' }}
              >
                Хорошо
              </Button>
            </PopupActions>
          </Box>
        )}
      </PopupBox>
    );
  }
}

export default PopupConfirmEventDelete;
