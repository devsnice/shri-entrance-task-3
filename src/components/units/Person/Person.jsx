import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';

const PersonWrapper = styled(Flex)`
  height: 24px;
  line-height: 24px;
`;

const PersonAvatar = styled(Box)`
  border-radius: 100%;
  height: 24px;
  width: 24px;
  margin-right: 8px;
`;

const PersonName = styled.span`
  font-size: 13px;

  ${media.lessThan('small')`
    font-size: 15px;
  `};
`;

const PersonDescription = styled.span`
  font-size: 13px;
  color: #c7c7c7;

  ${media.lessThan('small')`
    font-size: 15px;
  `};
`;

const PersonSeparator = styled.span`
  padding: 0 3px;
`;

class Person extends Component {
  static propTypes = {
    login: PropTypes.string,
    description: PropTypes.string,
    avatarUrl: PropTypes.string
  };

  static defaultProps = {
    login: null,
    description: null,
    avatarUrl: null
  };

  renderPersonDescription = () => {
    const { name, description } = this.props;

    return [
      <PersonSeparator key="separator">${` · `}</PersonSeparator>,
      <PersonDescription key="description">{description}</PersonDescription>
    ];
  };

  render() {
    const { login, avatarUrl, description } = this.props;

    return (
      <PersonWrapper>
        <PersonAvatar is="img" src={avatarUrl} alt="Дарт Вейдер" />
        <PersonName>{login}</PersonName>
        {description && this.renderPersonDescription()}
      </PersonWrapper>
    );
  }
}

export default Person;
