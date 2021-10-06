import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';

import logo from '~/assets/images/logo.png';

import { ThemeSwitch } from '../ThemeSwitch/ThemeSwitch';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <ThemeSwitch />
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
