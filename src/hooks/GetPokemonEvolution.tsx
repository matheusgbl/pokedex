import {
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

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
  });
  const [pokemonGenera, setPokemonGenera] = useState('');
  const [isSelected, setIsSelected] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(0);

  const [pokeFirstEvo, setPokemonFirstEvo] = useState<any>('');
  const [pokemonEvoDetail, setPokemonEvoDetail] = useState<any>([]);
  const [evolutionDetails, setEvolutionDetails] = useState<any>([]);

  const isFirstRun = useRef(true);

  const handlePokemon = useCallback((value: number) => {
    setSelectedPokemon(value);
    setIsSelected(true);
  }, []);

  const getPokeEvos = useCallback(async () => {
    await axios.get(pokeSpecies.evolution_chain.url).then(response => {
      setPokemonFirstEvo(response.data.chain.species.name);
      setPokemonEvoDetail(response.data.chain.evolves_to);
    });
  }, [pokeSpecies]);

  const getPokemonEvolution = useCallback(
    async (result: any[], firstEvo: string) => {
      const pokemonArr: any[] = [];
      for (let i = 0; i < result.length; i++) {
        const firstPoke = await api.getPokemonByName(firstEvo);
        pokemonArr.push(firstPoke);
        const response = result[i].species.name;
        const evoDetails = await api.getPokemonByName(response.toString());
        pokemonArr.push(evoDetails);

        if (result[i].evolves_to.length >= 1) {
          const pokeEvolves = result[i].evolves_to[i].species.name;
          const evoDetails2 = await api.getPokemonByName(
            pokeEvolves.toString()
          );
          pokemonArr.push(evoDetails2);
        }
      }
      return pokemonArr;
    },
    []
  );

  useEffect(() => {
    if (isSelected) {
      const fetchSpeciesData = async () => {
        await api
          .getPokemonSpeciesByName(selectedPokemon)
          .then((res: SetStateAction<SpeciesProps>) => setPokeSpecies(res));
      };
      fetchSpeciesData();
    }
  }, [selectedPokemon, isSelected]);

  useEffect(() => {
    const generaPokemon = pokeSpecies.genera
      .filter(
        (item: { language: { name: string } }) => item.language.name === 'en'
      )
      .map((item: { genus: any }) => item.genus)
      .toString();
    setPokemonGenera(generaPokemon);
  }, [pokeSpecies]);

  useEffect(() => {
    if (isSelected) {
      if (isFirstRun.current) {
        isFirstRun.current = false;
        return;
      }
      getPokeEvos();
    }
  }, [isSelected, getPokeEvos]);

  useEffect(() => {
    const response = async () => {
      const data = await getPokemonEvolution(pokemonEvoDetail, pokeFirstEvo);
      setEvolutionDetails(data);
    };
    response();
  }, [pokemonEvoDetail, pokeFirstEvo, getPokemonEvolution]);

  return {
    pokemonGenera,
    evolutionDetails,
    handlePokemon,
    pokeSpecies,
  };
}
