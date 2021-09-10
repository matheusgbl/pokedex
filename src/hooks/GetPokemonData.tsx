import { useEffect, useState } from 'react';

import api from '~/services/api';

export type pokeProps = {
  id: string;
  name: string;
  image: string;
  type: {
    name: string;
  };
  types: [];
  sprites: any;
  pokemons: [];
};

type regionsProps = {
  limit: number;
  offset: number;
  name: string;
};

export default function GetPokemonData() {
  const [allPokemons, setAllPokemons] = useState<pokeProps[]>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<pokeProps[]>([]);

  const [regions] = useState<regionsProps[]>([
    {
      name: 'Kanto',
      limit: 151,
      offset: 0,
    },
    {
      name: 'Johto',
      limit: 100,
      offset: 151,
    },
    {
      name: 'Hoenn',
      limit: 135,
      offset: 251,
    },
    {
      name: 'Sinnoh',
      limit: 108,
      offset: 386,
    },
    {
      name: 'Unova',
      limit: 155,
      offset: 494,
    },
    {
      name: 'Kalos',
      limit: 72,
      offset: 649,
    },
    {
      name: 'Alola',
      limit: 88,
      offset: 721,
    },
    {
      name: 'Galar',
      limit: 89,
      offset: 809,
    },
  ]);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypefilter] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const [isFiltered, setIsFiltered] = useState(false);

  const [limit, setLimit] = useState('151');
  const [offset, setOffset] = useState('0');

  const handleSearch = (input: string) => {
    const searchResult = allPokemons.filter(poke => {
      return poke.name.toLowerCase().includes(input.toLowerCase());
    });
    setSearch(input);
    setFilteredPokemons(searchResult);
    setIsFiltered(true);
  };

  const handleType = async (input: string) => {
    const filterResult = allPokemons.filter(poke =>
      poke.types.map((item: pokeProps) => item.type.name).includes(input)
    );
    setTypefilter(input);
    setFilteredPokemons(filterResult);
    setIsFiltered(true);
  };

  const handleRegion = async (input: string) => {
    const resultLimit = regions
      .filter(region => region.name === input)
      .map(item => item.limit)
      .toString();

    const resultOffset = regions
      .filter(region => region.name === input)
      .map(item => item.offset)
      .toString();

    setLimit(resultLimit);
    setOffset(resultOffset);
    setSelectedRegion(input);
  };

  useEffect(() => {
    const getPokemonData = async (result: any) => {
      const pokemonArr: any[] = [];

      await Promise.all(
        result.map(async (pokemon: { name: string }) => {
          const result = await api.get(`/pokemon/${pokemon.name}`);
          pokemonArr.push(result.data);
        })
      );

      pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      return pokemonArr;
    };

    const response = async () => {
      const res = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
      const data = getPokemonData(res.data.results);
      setAllPokemons(await data);
      setFilteredPokemons(await data);
    };
    response();
  }, [limit, offset]);

  useEffect(() => {
    if (typeFilter === 'All Types') {
      setTypefilter('');
    }
  }, [typeFilter]);

  useEffect(() => {
    if (typeFilter === 'All types') {
      setIsFiltered(false);
    }
  }, [setIsFiltered, typeFilter]);

  return {
    allPokemons,
    filteredPokemons,
    search,
    typeFilter,
    selectedRegion,
    isFiltered,
    handleSearch,
    handleType,
    handleRegion,
  };
}
