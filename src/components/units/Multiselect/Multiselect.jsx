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
    list: PropTypes.array,
    value: PropTypes.array
  };

  static defaultProps = {
    label: null,
    value: [],
    list: []
  };

  handleSelectItem = item => {
    const newValue = [...this.props.value, item.id];

    this.props.handleOnChange(newValue);
  };

  handleRemoveItem = id => {
    const newValue = this.props.value.filter(item => {
      item.id !== id;
    });

    this.props.handleOnChange(newValue);
  };

  render() {
    const { label, list } = this.props;

    return (
      <Box>
        <Label label={label} />
        <Dropdown
          placeholder="Например, Тор Одинович"
          list={list}
          handleSelectItem={this.handleSelectItem}
        />

        <MultiselectSelection>
          {this.props.value.map(item => {
            return (
              <MultiselectSelectedUser
                handleRemove={this.handleRemoveItem}
                item={item}
                key={item.id}
              />
            );
          })}
        </MultiselectSelection>
      </Box>
    );
  }
}

export default Multiselect;
