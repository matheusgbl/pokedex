import { useCallback, useEffect, useRef, useState } from 'react';

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
  const [isMounted, setIsMounted] = useState(false);

  const handlePokemon = useCallback(async (value: number) => {
    await api.getPokemonSpeciesByName(value).then((res: any) =>
      setPokeSpecies({
        name: res.name,
        id: res.id,
        genera: res.genera,
        flavor_text_entries: res.flavor_text_entries,
        evolution_chain: res.evolution_chain,
      })
    );
    setIsSelected(true);
  }, []);

  useEffect(() => {
    if (isSelected) {
      const getPokemonData = async (result: any) => {
        const pokemonArr: any[] = [];

        await Promise.all(
          result.map(async (pokemon: { evolutionName: string }) => {
            const result = await api.getPokemonByName(pokemon.evolutionName);
            pokemonArr.push(result);
          })
        );

        setPokemonEvoDetail(pokemonArr);
      };
      const apiResponse = async () => {
        const response = await axios.get(pokeSpecies.evolution_chain.url);
        console.log(response);
        const evoChain = [];
        let evoData = response.data.chain;

        do {
          evoChain.push({
            evolutionName: evoData.species.name,
          });

          evoData = evoData['evolves_to'][0];
          // eslint-disable-next-line no-prototype-builtins
        } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
        getPokemonData(evoChain);
      };
      apiResponse();
    }
  }, [pokeSpecies, isSelected]);

  return {
    handlePokemon,
    pokeSpecies,
    isSelected,
    setIsSelected,
    pokemonEvoDetail,
    isMounted,
  };
}
