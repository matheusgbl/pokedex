import React from 'react';

import { NextPage } from 'next';

interface Props {
  pokemons?: any[];
}

import { pokeProps } from '~/hooks/GetPokemonData';
import api from '~/services/api';
import { Container } from '~/styles/pages/pokeInfo';

const PokeInfo: NextPage<Props> = ({ pokemons }) => {
  const { name } = pokemons;

  return <Container>PokéInfo: {name}</Container>;
};

PokeInfo.getInitialProps = async ({ query }) => {
  const { id } = query;

  const res = await api.get(`/pokemon/${id}`);
  const pokemons: pokeProps[] = await res.data;
  return { pokemons };
};

export default PokeInfo;
