import React from 'react';
import { BsMoon } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';
import Switch from 'react-switch';

import { Container } from './styles';

interface ThemeProps {
  changeTheme: () => void;
  theme: string;
}

export default function ThemeSwitch({ changeTheme, theme }: ThemeProps) {
  return (
    <Container>
      <MdWbSunny color="#ffe031" size={24} />
      <Switch
        onChange={changeTheme}
        checked={theme === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={20}
        onColor="#ffe031"
        offColor="#325387"
      />
      <BsMoon color="#325387" size={24} />
    </Container>
  );
}
