import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { doesNodeContainClick } from '../../utils/domUtils';

const withCloseOnOutsideClick = WrappedComponent => {
  return class ComponentWithCloseOnOutsideClick extends React.Component {
    static propTypes = {
      isOpen: PropTypes.bool.isRequired,
      handleClose: PropTypes.func.isRequired
    };

    componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.attachHandlersOnOpen();
      } else if (!nextProps.isOpen && this.props.isOpen) {
        this.dettachHandlersOnClose();
      }
    }

    attachHandlersOnOpen = () => {
      document.addEventListener('click', this.closeOnDocumentClick);
    };

    dettachHandlersOnClose = () => {
      document.removeEventListener('click', this.closeOnDocumentClick);
    };

    closeOnDocumentClick = e => {
      if (doesNodeContainClick(this.ref, e)) return;

      this.props.handleClose();
    };

    handleRef = elem => (this.ref = elem);

    render() {
      const { handleClose, ...restProps } = this.props;

      return (
        <div ref={this.handleRef}>
          <WrappedComponent {...restProps} />
        </div>
      );
    }
  };
};

export default withCloseOnOutsideClick;
