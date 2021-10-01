import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

import Image from 'next/image';

import logo from '~/assets/images/logo.png';

import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import { Container } from './styles';

interface ThemeProps {
  currTheme: string;
  toggleTheme: () => void;
}

export const Header = ({ currTheme, toggleTheme }: ThemeProps) => {
  return (
    <Container>
      <ThemeSwitch theme={currTheme} changeTheme={toggleTheme} />
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
