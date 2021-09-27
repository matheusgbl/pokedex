import React from 'react';

import Image from 'next/dist/client/image';

import loadingPikachu3 from '~/assets/images/loadingPikachu3.gif';

import { Container } from './styles';

export const PokeLoading = () => {
  return (
    <Container className="loading">
      <h2>Loading</h2>
      <Image src={loadingPikachu3} alt="loading" />
    </Container>
  );
};
