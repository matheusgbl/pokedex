import React from 'react';
import Image from 'next/image';

import logo from '../assets/logo.png';

export const Header = () => {
  return (
    <header className="flex w-full">
      <Image src={logo} alt="logo"></Image>
    </header>
  )
}