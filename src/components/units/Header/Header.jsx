import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import media from 'styled-media-query';

import { Box, Flex } from 'grid-styled';
import { Link } from 'react-router-dom';

import Button from '../Button/Button';
import logotype from './logo.svg';

const Wrapper = styled(Flex).attrs({
  justify: 'center'
})`
  background: #fff;
  border-bottom: 1px solid #e9ecef;
`;

const HeaderContent = styled(Flex).attrs({
  justify: 'space-between',
  align: 'center'
})`
  padding: 0 24px;
  width: 100%;
  max-width: 1280px;
  height: 71px;

  ${media.lessThan('small')`
    padding: 0 20px;
    height: 47px;
  `};
`;

const HeaderLogoImage = styled(Box)`
  height: 26px;

  ${media.lessThan('small')`
    height: 21px;
  `};
`;

const HeaderControls = styled(Flex)`
  ${media.lessThan('small')`
    display: none;
  `};
`;

class Header extends Component {
  render() {
    return (
      <Wrapper is="header" className="header">
        <HeaderContent className="header__content">
          <h1 className="header__logo">
            <Link to="/">
              <HeaderLogoImage
                is="img"
                src={logotype}
                alt="Яндекс переговорки"
              />
            </Link>
          </h1>
          <HeaderControls className="header__controls">
            <Link to="/event">
              <Button type="blue">Создать встречу</Button>
            </Link>
          </HeaderControls>
        </HeaderContent>
      </Wrapper>
    );
  }
}

export default Header;
