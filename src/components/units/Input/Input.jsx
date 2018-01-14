import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box } from 'grid-styled';

import Icon from '../Icons/Icon';
import Label from '../Label/Label';

const Wrapper = styled(Box)`
  position: relative;
`;

const InputElement = styled.input`
  background: #ffffff;
  border: 2px solid #e9ecef;
  border-radius: 4px;
  width: 100%;
  height: 38px;
  padding: 0 10px;
  font-size: 15px;

  ${media.lessThan('small')`
    height: 44px;
  `};

  &::placeholder {
    color: #858e98;
  }

  &:focus {
    border-color: #007dff;
  }
`;

const InputIcon = styled.span`
  position: absolute;
  right: 12px;
  bottom: 50%;
  transform: translateY(50%);
`;

class Input extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    iconElement: PropTypes.element,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    readOnly: PropTypes.bool
  };

  static defaultProps = {
    name: null,
    type: 'text',
    iconElement: null,
    label: null,
    placeholder: null,
    value: '',
    onChange: null,
    onFocus: null,
    onBlur: null,
    readOnly: false
  };

  render() {
    const {
      iconElement,
      label,
      placeholder,
      value,
      type,
      name,
      onChange,
      onBlur,
      onFocus,
      onClick,
      readOnly
    } = this.props;

    return (
      <Wrapper>
        <Label label={label} />

        <Wrapper>
          <InputElement
            type={type}
            name={name}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            onClick={onClick}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
          />

          {iconElement && <InputIcon>{iconElement}</InputIcon>}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Input;
