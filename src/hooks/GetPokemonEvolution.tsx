import { useEffect, useState } from 'react';

import axios from 'axios';

import { api } from '~/services/api';

export default function GetPokemonEvolution(
  genera: any[],
  evolution_chain: { url: string }
) {
  const [pokemonGenera, setPokemonGenera] = useState('');
  const [pokemonEvoDetail, setPokemonEvoDetail] = useState<any>([]);
  const [pokeFirstEvo, setPokemonFirstEvo] = useState<any>('');

  const [as, setAs] = useState<any>([]);

  useEffect(() => {
    const generaPokemon = genera
      .filter(
        (item: { language: { name: string } }) => item.language.name === 'en'
      )
      .map((item: { genus: any }) => item.genus)
      .toString();

    setPokemonGenera(generaPokemon);
  }, [genera]);

  useEffect(() => {
    const getPokeEvos = async () => {
      await axios.get(evolution_chain.url).then(response => {
        setPokemonFirstEvo(response.data.chain.species.name);
        setPokemonEvoDetail(response.data.chain.evolves_to);
      });
    };
    getPokeEvos();
  }, [evolution_chain]);

  useEffect(() => {
    const getPokemonEvolution = async (result: any[], firstEvo: string) => {
      const pokemonArr: any[] = [];
      for (let i = 0; i < result.length; i++) {
        const firstPoke = await api.getPokemonByName(firstEvo);
        pokemonArr.push(firstPoke);
        const response = result[i].species.name;
        const evoDetails = await api.getPokemonByName(response.toString());
        pokemonArr.push(evoDetails);
        console.log(result);

        if (result[i].evolves_to.length >= 1) {
          const pokeEvolves = result[i].evolves_to[i].species.name;
          const evoDetails2 = await api.getPokemonByName(
            pokeEvolves.toString()
          );
          pokemonArr.push(evoDetails2);
        }
      }
      return pokemonArr;
    };

    const response = async () => {
      const data = await getPokemonEvolution(pokemonEvoDetail, pokeFirstEvo);
      setAs(data);
    };

    response();
  }, [evolution_chain.url, pokemonEvoDetail, pokeFirstEvo]);

  return {
    pokemonGenera,
    as,
  };
}
