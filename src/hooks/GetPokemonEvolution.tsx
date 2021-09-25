import { useCallback, useState } from 'react';

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

  const [as, setAs] = useState<any>([]);

  const handlePokemon = useCallback(async (value: number) => {
    const getDetails = await api.getPokemonByName(value);
    const getSpecies = await api.getPokemonSpeciesByName(value);
    const getEvolution = await axios.get(getSpecies.evolution_chain.url);

    setPokemonEvoDetail(getDetails);
    setPokeSpecies(getSpecies);

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
    setAs(pokemonArr);
    setIsSelected(true);
  }, []);

  return {
    pokeSpecies,
    isSelected,
    handlePokemon,
    setIsSelected,
    pokemonEvoDetail,
    as,
  };
}
