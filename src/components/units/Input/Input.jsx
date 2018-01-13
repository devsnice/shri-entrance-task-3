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
    iconElement: PropTypes.element,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func
  };

  static defaultProps = {
    iconElement: null,
    label: null,
    placeholder: null,
    value: null,
    onBlur: null
  };

  render() {
    const {
      iconElement,
      label,
      placeholder,
      value,
      onChange,
      onBlur
    } = this.props;

    return (
      <Wrapper>
        <Label label={label} />

        <Wrapper>
          <InputElement
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            value={value}
          />

          {iconElement && <InputIcon>{iconElement}</InputIcon>}
        </Wrapper>
      </Wrapper>
    );
  }
}

export default Input;
