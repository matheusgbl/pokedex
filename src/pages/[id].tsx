import React from 'react';
import { IoReturnUpBackOutline } from 'react-icons/io5';

import { NextPage } from 'next';
import Link from 'next/link';

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
    abilities: [
      {
        ability: {
          name: string;
        };
      }
    ];
    moves: [
      {
        move: {
          name: string;
        };
      }
    ];
    height: number;
    weight: number;
    types: [
      {
        type: {
          name: string;
        };
      }
    ];
  };
  species: {
    genera: [];
    flavor_text_entries: [
      {
        language: {
          name: string;
        };
        flavor_text: string;
      }
    ];
    evolution_chain: any;
  };
}

const PokeInfo: NextPage<Props> = ({ pokemons, species }) => {
  const { name, sprites, id, stats, abilities, moves, height, weight, types } =
    pokemons;

  const { genera, flavor_text_entries, evolution_chain } = species;

  const { pokemonGenera, evolutionDetails } = GetPokemonEvolution(
    genera,
    evolution_chain
  );

  const flavText = flavor_text_entries.filter(
    flav => flav.language.name === 'en'
  )[0].flavor_text;

  return (
    <Container>
      <Link href="/" passHref={true}>
        <span className="return_page">
          <IoReturnUpBackOutline size={40} /> Return
        </span>
      </Link>
      <h1>Pokemon Details</h1>
      <PokeCardDetails
        id={id}
        name={name}
        key={id}
        image={
          sprites.other.dream_world.front_default ||
          sprites.other['official-artwork'].front_default
        }
        attack={stats[1].base_stat}
        defense={stats[2].base_stat}
        hp={stats[0].base_stat}
        abilities={abilities}
        moves={moves}
        height={height}
        weight={weight}
        genera={pokemonGenera}
        about={flavText.replace('', ' ').replace('POKéMON', 'POKÉMON')}
        evoDetails={evolutionDetails}
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
