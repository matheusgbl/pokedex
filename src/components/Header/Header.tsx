import React from 'react';

import Image from 'next/image';

import logo from '~/assets/images/logo.png';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logo} alt="logo"></Image>
    </Container>
  );
};
