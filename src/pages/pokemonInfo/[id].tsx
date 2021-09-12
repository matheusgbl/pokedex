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
  species: {
    genera: any[];
    flavor_text_entries: any[];
  };
  evolution: {
    chain: {
      evolves_to: any[];
    };
  };
}

const PokeInfo: NextPage<Props> = ({ pokemons, species, evolution }) => {
  const { name, sprites, id, stats, abilities, moves, height, weight } =
    pokemons;

  const { genera, flavor_text_entries } = species;

  const { evolves_to } = evolution.chain;

  function getPokemonEvolution(pokemonEvolution: any[]) {
    const evoArr = [];
    for (let i = 0; i < pokemonEvolution.length; i++) {
      const pokemonProperties = Object.prototype.hasOwnProperty.call(
        pokemonEvolution[i],
        'evolves_to'
      );
      if (pokemonProperties) {
        const result = pokemonEvolution.map(
          item => item.evolves_to[i].species.name
        );
        evoArr.push({
          evoName: result.toString(),
        });
      }
      const result = pokemonEvolution.map(item => item.species.name);
      evoArr.push({
        evoName: result.toString(),
      });
    }
    return evoArr;
  }

  console.log(getPokemonEvolution(evolves_to));

  const pokemonGenera = genera
    .filter(item => item.language.name === 'en')
    .map(item => item.genus)
    .toString();

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
        genera={pokemonGenera}
        about={flavor_text_entries[0].flavor_text
          .replace('', ' ')
          .replace('POKéMON', 'POKÉMON')}
      />
    </Container>
  );
};

PokeInfo.getInitialProps = async ({ query }) => {
  const { id } = query;

  const details = await api.getPokemonByName(id);
  const specieDetail = await api.getPokemonSpeciesByName(id);
  const evoChain = await api.getEvolutionChainById(id);
  const pokemons = await details;
  const species = await specieDetail;
  const evolution = await evoChain;
  return { pokemons, species, evolution };
};

export default PokeInfo;
