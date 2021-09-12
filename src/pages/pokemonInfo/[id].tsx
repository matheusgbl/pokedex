import React from 'react';

import { NextPage } from 'next';

import { PokeCardDetails } from '~/components/PokeCardDetail/PokeCardDetails';
import { api } from '~/services/api';
import { Container } from '~/styles/pages/pokeInfo';

interface Props {
  pokemons: {
    name: string;
    sprites: any;
    id: number;
    stats: any;
    abilities: [];
    moves: [];
    height: number;
    weight: number;
  };
}

const PokeInfo: NextPage<Props> = ({ pokemons }) => {
  const { name, sprites, id, stats, abilities, moves, height, weight } =
    pokemons;
  // console.log(api.getPokemonSpeciesByName(id));
  console.log(pokemons);

  return (
    <Container>
      <h3>PokémonDetails</h3>
      <PokeCardDetails
        id={id}
        name={name}
        key={id}
        image={sprites.other.dream_world.front_default}
        attack={stats[1].base_stat}
        defense={stats[2].base_stat}
        hp={stats[0].base_stat}
        abilities={abilities.map(
          (item: { ability: { name: string } }) => item.ability.name + ' '
        )}
        moves={moves
          .slice(0, 6)
          .map((item: { move: { name: string } }) => item.move.name + ' ')}
        height={height}
        weight={weight}
      />
    </Container>
  );
};

PokeInfo.getInitialProps = async ({ query }) => {
  const { id } = query;

  const details = await api.getPokemonByName(id);
  const pokemons = await details;
  return { pokemons };
};

export default PokeInfo;
