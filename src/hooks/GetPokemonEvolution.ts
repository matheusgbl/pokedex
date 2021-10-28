import { useState } from 'react';

import axios from 'axios';

import api from '~/services/api';

type SpeciesProps = {
  genera: string;
  evolution_chain: {
    url: string;
  };
  flavor_text_entries: string;
};

export default function GetPokemonEvolution() {
  const [pokeSpecies, setPokeSpecies] = useState<SpeciesProps>({
    genera: '',
    evolution_chain: { url: '' },
    flavor_text_entries: '',
  });
  const [isSelected, setIsSelected] = useState(false);

  const [evoData, setEvoData] = useState<any>([]);
  const [pokemonEvoDetail, setPokemonEvoDetail] = useState<any>([]);

  const fetchEvoImgs = async (url: string) => {
    const fetchEvo = await axios.get(url);

    const evoChain: any[] = [];
    let evoData = fetchEvo.data.chain;

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
        const result = await api.get(`/pokemon/${poke.evolutionName}`);
        pokemonArr.push(result.data);
      })
    );
    setEvoData(pokemonArr);
  };

  const handlePokemon = (value: any) => {
    const fetchPokeAbout = async () => {
      const getDetails = await api.get(`/pokemon-species/${value.id}`);
      fetchEvoImgs(getDetails.data.evolution_chain.url);
      setPokeSpecies({
        genera: getDetails.data.genera
          .filter(
            (gen: { language: { name: string } }) => gen.language.name === 'en'
          )
          .map((gen: { genus: any }) => gen.genus)
          .toString(),
        flavor_text_entries: getDetails.data.flavor_text_entries
          .filter(
            (flav: { language: { name: string } }) =>
              flav.language.name === 'en'
          )[0]
          .flavor_text.replace('', ' ')
          .replace('POKéMON', 'POKÉMON'),
        evolution_chain: getDetails.data.evolution_chain,
      });
    };
    setPokemonEvoDetail(value);
    fetchPokeAbout();
    setIsSelected(true);
  };

  return {
    handlePokemon,
    setIsSelected,
    pokeSpecies,
    isSelected,
    evoData,
    pokemonEvoDetail,
  };
}
