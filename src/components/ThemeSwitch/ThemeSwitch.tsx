import React, { useState } from 'react';
import { BsMoon } from 'react-icons/bs';
import { MdWbSunny } from 'react-icons/md';

import { useTheme } from 'next-themes';

import { Container, Switch, SwitchBtn } from './styles';

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [currTheme, setCurrTheme] = useState(false);

  {
    currTheme ? setTheme('light') : setTheme('dark');
  }

  const toggleTheme = () => setCurrTheme(value => !value);

  return (
    <Container>
      <Switch
        style={{
          backgroundColor: theme === 'dark' ? '#325387' : '#f5d627',
        }}
      >
        <SwitchBtn
          onClick={toggleTheme}
          className={`${!currTheme ? 'switch_checked' : ''}`}
        />
        <span>
          <MdWbSunny size={20} color="#ffe031" />
        </span>
        <span>
          <BsMoon size={20} color="#325387" />
        </span>
      </Switch>
    </Container>
  );
};
