import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';

import logo from '~/assets/images/logo.png';

import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <Container>
      <Image src={logo} alt="logo"></Image>
      <a
        href="https://github.com/matheusgbl/pokedex"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub className="github_icon" size={40} />
      </a>
    </Container>
  );
};
