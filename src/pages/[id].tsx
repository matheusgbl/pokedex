import React from 'react';

import { NextPage } from 'next';

import { PokeCardDetails } from '~/components/PokeCardDetail/PokeCardDetails';
import GetPokemonEvolution from '~/hooks/GetPokemonEvolution';
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
    types: any[];
  };
  species: {
    genera: any[];
    flavor_text_entries: any[];
    evolution_chain: any;
  };
}

const PokeInfo: NextPage<Props> = ({ pokemons, species }) => {
  const { name, sprites, id, stats, abilities, moves, height, weight, types } =
    pokemons;

  const { genera, flavor_text_entries, evolution_chain } = species;

  const { pokemonGenera, as } = GetPokemonEvolution(genera, evolution_chain);

  return (
    <Container>
      <h1>Pokemon Details</h1>
      <PokeCardDetails
        id={id}
        name={name}
        key={id}
        image={sprites.other.dream_world.front_default}
        attack={stats[1].base_stat}
        defense={stats[2].base_stat}
        hp={stats[0].base_stat}
        abilities={abilities}
        moves={moves}
        height={height}
        weight={weight}
        genera={pokemonGenera}
        about={flavor_text_entries[0].flavor_text
          .replace('', ' ')
          .replace('POKéMON', 'POKÉMON')}
        evoImg={as}
        type={types.map(item => item.type.name)}
      />
    </Container>
  );
};

PokeInfo.getInitialProps = async ({ query }) => {
  const { id } = query;

  const details = await api.getPokemonByName(id);
  const specieDetail = await api.getPokemonSpeciesByName(id);
  const pokemons = await details;
  const species = await specieDetail;
  return { pokemons, species };
};

export default PokeInfo;
