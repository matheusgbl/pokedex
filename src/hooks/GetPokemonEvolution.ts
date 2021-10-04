import { useState } from 'react';

import axios from 'axios';

import { api } from '~/services/api';

type SpeciesProps = {
  genera: [
    {
      genus: string;
      language: {
        name: string;
      };
    }
  ];
  evolution_chain: {
    url: string;
  };
  id: number;
  name: string;
  flavor_text_entries: [
    {
      flavor_text: string;
      language: {
        name: string;
      };
    }
  ];
};

export default function GetPokemonEvolution() {
  const [pokeSpecies, setPokeSpecies] = useState<SpeciesProps>({
    evolution_chain: {
      url: '',
    },
    genera: [
      {
        genus: '',
        language: {
          name: '',
        },
      },
    ],
    id: 0,
    name: '',
    flavor_text_entries: [
      {
        flavor_text: '',
        language: {
          name: '',
        },
      },
    ],
  });
  const [isSelected, setIsSelected] = useState(false);

  const [pokemonEvoDetail, setPokemonEvoDetail] = useState<any>([]);

  const [evoData, setEvoData] = useState<any>([]);

  const handlePokemon = async (value: number) => {
    const getDetails = await api.getPokemonByName(value);
    const getSpecies = await api.getPokemonSpeciesByName(value);

    setPokemonEvoDetail({
      sprites:
        getDetails.sprites.other.dream_world.front_default ||
        getDetails.sprites.other['official-artwork'].front_default,
      hp: getDetails.stats[0].base_stat,
      attack: getDetails.stats[1].base_stat,
      defense: getDetails.stats[2].base_stat,
      abilities: getDetails.abilities,
      moves: getDetails.moves.slice(0, 6),
      height: getDetails.height,
      weight: getDetails.weight,
      type: getDetails.types.map(
        (item: { type: { name: any } }) => item.type.name
      ),
    });
    setPokeSpecies({
      name: getSpecies.name,
      id: getSpecies.id,
      genera: getSpecies.genera
        .filter(
          (gen: { language: { name: string } }) => gen.language.name === 'en'
        )
        .map((gen: { genus: any }) => gen.genus)
        .toString(),
      flavor_text_entries: getSpecies.flavor_text_entries
        .filter(
          (flav: { language: { name: string } }) => flav.language.name === 'en'
        )[0]
        .flavor_text.replace('', ' ')
        .replace('POKéMON', 'POKÉMON'),
      evolution_chain: getSpecies.evolution_chain,
    });

    const getEvolution = await axios.get(getSpecies.evolution_chain.url);
    const evoChain: any[] = [];
    let evoData = getEvolution.data.chain;

    do {
      evoChain.push({
        evolutionName: evoData.species.name,
      });

      evoData = evoData['evolves_to'][0];
      // eslint-disable-next-line no-prototype-builtins
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    const pokemonArr: any[] = [];
    await Promise.all(
      evoChain.map(async poke => {
        const result = await api.getPokemonByName(poke.evolutionName);
        pokemonArr.push(result);
      })
    );
    setEvoData(pokemonArr);
    setIsSelected(true);
  };

  return {
    pokeSpecies,
    isSelected,
    handlePokemon,
    setIsSelected,
    pokemonEvoDetail,
    evoData,
  };
}
