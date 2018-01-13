import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import Icon from '../Icons/Icon';
import Input from '../Input/Input';

import Person from '../Person/Person';

import withCloseOnOutsideClick from '../../hocs/withCloseOnOutsideClick';

// TODO:: component needs refactoring

const DropdownWrapper = styled(Box)`
  position: relative;
`;

const DropdownContentBox = styled(Box)`
  background: #ffffff;
  box-shadow: 0 1px 10px 0 rgba(0, 44, 92, 0.28);
  border-radius: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 4px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  z-index: 50;
`;

const DropdownList = styled(Box)`
  max-height: 136px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    width: 8px;
    height: 40px;
    background: #d5dfe9;
    border-radius: 100px;
  }
`;

const DropdownListItem = styled(Box)`
  height: 34px;
  line-height: 34px;
  padding: 5px 16px;
  cursor: pointer;

  &:hover {
    background: #f6f7f9;
    font-family: ${props => props.theme.fontBold};
  }
`;

const DropdownListEmpty = styled(Box)`
  text-align: center;
  padding: 30px 0px;
  color: #e9ecef;
  font-size: 14px;
`;

const DropdownContent = withCloseOnOutsideClick(DropdownContentBox);

class Dropdown extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    handleSelectItem: PropTypes.func.isRequired
  };

  static defaultProps = {
    label: null,
    placeholder: null
  };

  state = {
    isOpen: false,
    filterValue: ''
  };

  handleFilterList = e => {
    const { value } = e.target;

    this.setState({
      filterValue: value,
      isOpen: true
    });
  };

  closeDropdown = () => {
    this.setState({
      isOpen: false
    });
  };

  handleSelectDropdownItem = id => {
    this.props.handleSelectItem(id);
  };

  // todo::separate components
  renderDropdownList = () => {
    const { list } = this.props;

    const filteredList = list.filter(
      item => item.login.indexOf(this.state.filterValue) !== -1
    );

    if (!filteredList.length)
      return <DropdownListEmpty>Нет совпадений</DropdownListEmpty>;

    // TODO: templates and dropdowns should have special composition
    return (
      <DropdownList>
        {filteredList.map(item => (
          <DropdownListItem
            onClick={() => {
              this.handleSelectDropdownItem(item);
            }}
          >
            <Person {...item} description={`${item.homeFloor} этаж`} />
          </DropdownListItem>
        ))}
      </DropdownList>
    );
  };

  render() {
    const { label, placeholder, list } = this.props;

    return (
      <DropdownWrapper>
        <Input
          onChange={this.handleFilterList}
          label={label}
          placeholder={placeholder}
        />

        <DropdownContent
          isOpen={this.state.isOpen}
          handleClose={this.closeDropdown}
        >
          {this.renderDropdownList()}
        </DropdownContent>
      </DropdownWrapper>
    );
  }
}

export default Dropdown;
