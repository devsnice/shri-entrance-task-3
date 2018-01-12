import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Box } from 'grid-styled';

const SvgIcon = styled(Box)`
  opacity: 0.4;
  display: block;
  width: 12px;
  height: 12px;

  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

class Icon extends React.Component {
  static propTypes = {
    iconName: PropTypes.string.isRequired
  };

  render() {
    const { iconName } = this.props;
    const useTag = `<use xlink:href=#${iconName} />`;

    return (
      <SvgIcon
        is="svg"
        role="img"
        className="icon"
        dangerouslySetInnerHTML={{ __html: useTag }}
      />
    );
  }
}

export default Icon;
