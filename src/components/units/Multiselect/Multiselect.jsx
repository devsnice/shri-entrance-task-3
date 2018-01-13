import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import Icon from '../Icons/Icon';
import Label from '../Label/Label';
import Dropdown from '../Dropdown/Dropdown';

import MultiselectSelectedUser from './MultiselectSelectedUser';

const MultiselectSelection = styled(Box)`
  margin-top: 12px;
`;

class Multiselect extends React.Component {
  static propTypes = {
    handleOnChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    list: PropTypes.array
  };

  static defaultProps = {
    label: null,
    list: []
  };

  state = {
    value: []
  };

  handleSelectItem = item => {
    this.setState({
      value: [...this.state.value, item]
    });

    this.props.handleOnChange(this.state.value);
  };

  handleRemoveItem = id => {
    this.setState({
      value: this.state.value.filter(item => {
        item.id !== id;
      })
    });

    this.props.handleOnChange(this.state.value);
  };

  render() {
    const { label, list } = this.props;

    return (
      <Box>
        <Label label={label} />
        <Dropdown list={list} handleSelectItem={this.handleSelectItem} />

        <MultiselectSelection>
          {this.state.value.map(item => {
            return (
              <MultiselectSelectedUser
                handleRemove={this.handleRemoveItem}
                item={item}
              />
            );
          })}
        </MultiselectSelection>
      </Box>
    );
  }
}

export default Multiselect;
