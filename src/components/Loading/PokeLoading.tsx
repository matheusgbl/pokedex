import React from 'react';
import Loader from 'react-loader-spinner';

import Image from 'next/dist/client/image';

import loadingPikachu3 from '~/assets/images/loadingPikachu3.gif';

import { Container } from './styles';

export const PokeLoading = () => {
  return (
    <Container className="loading">
      Loading
      <Loader type="ThreeDots" color="#ffe031" height={80} width={80} />
      <Image src={loadingPikachu3} alt="loading" />
    </Container>
  );
};
