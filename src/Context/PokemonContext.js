import { createContext, useState, useCallback, useEffect } from 'react';

import { api } from '~/services/api';

const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isFiltered, setIsFiltered] = useState(false);

  const [regions] = useState([
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
  const [limit, setLimit] = useState('151');
  const [offset, setOffset] = useState('0');

  const [selectedRegion, setSelectedRegion] = useState('');
  const [typeFilter, setTypefilter] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [search, setSearch] = useState('');

  const handleRegion = useCallback(
    async input => {
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
    },
    [regions]
  );

  const handleType = useCallback(
    async input => {
      const filterResult = pokemons.filter(poke =>
        poke.types.map(item => item.type.name).includes(input)
      );
      setTypefilter(input);
      setFilteredPokemons(filterResult);
      setIsFiltered(true);
    },
    [pokemons]
  );

  const handleSort = useCallback(
    async input => {
      let pokemonSortArr;

      isFiltered
        ? (pokemonSortArr = filteredPokemons)
        : (pokemonSortArr = pokemons);

      if (input === 'id') {
        pokemonSortArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      } else {
        pokemonSortArr.sort((a, b) =>
          a.name > b.name ? 1 : b.name > a.name ? -1 : 0
        );
      }

      setSortBy(input);
      setFilteredPokemons(pokemonSortArr);
      setIsFiltered(true);
    },
    [filteredPokemons, pokemons, isFiltered]
  );

  const handleSearch = useCallback(
    async input => {
      const searchResult = pokemons.filter(poke => {
        return poke.name.toLowerCase().includes(input.toLowerCase());
      });
      setSearch(input);
      setFilteredPokemons(searchResult);
      setIsFiltered(true);
      setTypefilter('all pokemons');
    },
    [pokemons]
  );

  useEffect(() => {
    const getPokemonData = async result => {
      const pokemonArr = [];

      await Promise.all(
        result.map(async pokemon => {
          const result = await api.getPokemonByName(pokemon.name);
          pokemonArr.push(result);
        })
      );

      pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
      return pokemonArr;
    };

    const response = async () => {
      const interval = {
        limit: limit,
        offset: offset,
      };
      const res = await api.getPokemonsList(interval);
      const data = getPokemonData(res.results);
      setPokemons(await data);
      setIsLoading(false);
    };
    response();
  }, [limit, offset]);

  useEffect(() => {
    if (typeFilter === 'All types') {
      setIsFiltered(false);
    }
  }, [setIsFiltered, typeFilter]);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        filteredPokemons,
        isFiltered,
        selectedRegion,
        isLoading,
        typeFilter,
        sortBy,
        search,
        handleRegion,
        handleType,
        handleSort,
        handleSearch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
