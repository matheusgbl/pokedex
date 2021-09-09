import React, { useEffect, useState } from 'react';

import gsap from 'gsap';
import { InferGetStaticPropsType } from 'next';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import { PokeCard } from '~/components/PokeCard/PokeCard';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import api from '~/services/api';
import { Container, FilterAndSearch, Content } from '~/styles/pages/home';

type pokeProps = {
  id: string;
  name: string;
  image: string;
  type: {
    name: string;
  };
  types: [];
  sprites: any;
  limit: number;
  offset: number;
};

export const getStaticProps = async () => {
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
  const res = await api.get('/pokemon?limit=151&offset=0');
  const pokemons: pokeProps[] = await getPokemonData(res.data.results);

  return {
    props: {
      pokemons,
    },
  };
};

const Home = ({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [allPokemons] = useState(pokemons);
  const [searchPokemons, setSearchPokemons] = useState(pokemons);
  const [typePokemons, setTypePokemons] = useState(pokemons);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypefilter] = useState('');

  const [searched, setSearched] = useState(false);
  const [filteredType, setFilteredType] = useState(false);

  const handleSearch = async (input: string) => {
    const filtered = allPokemons.filter(poke => {
      return poke.name.toLowerCase().includes(input.toLowerCase());
    });
    setSearch(input);
    setSearchPokemons(filtered);
    setSearched(true);
    setFilteredType(false);
    setTypefilter('All types');
  };

  const handleType = async (input: string) => {
    const filtered = allPokemons.filter(poke =>
      poke.types.map((item: pokeProps) => item.type.name).includes(input)
    );
    setTypefilter(input);
    setTypePokemons(filtered);
    setFilteredType(true);
    setSearched(false);
  };

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.poke_card',
      {
        y: 260,
        scale: 1.5,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        stagger: 0.5,
        duration: 0.5,
        ease: 'back',
        opacity: 1,
      },
      '<1'
    );
  }, []);

  useEffect(() => {
    if (typeFilter === 'All types') {
      setTypePokemons(allPokemons);
    }
  }, [allPokemons, typeFilter]);

  return (
    <>
      <Header />
      <FilterAndSearch>
        <PokeRegions />
        <PokeSortBy />
        <PokeTypes value={typeFilter} onChangeValue={handleType} />
        <PokeSearch value={search} onChangeValue={handleSearch} />
      </FilterAndSearch>
      <Container>
        {searched
          ? searchPokemons.map(poke => (
              <Content key={poke.id}>
                <PokeCard
                  id={poke.id}
                  image={poke.sprites.other.dream_world.front_default}
                  name={poke.name}
                  type={poke.types.map((item: pokeProps) => item.type.name)}
                />
              </Content>
            ))
          : filteredType
          ? typePokemons.map(poke => (
              <Content key={poke.id}>
                <PokeCard
                  id={poke.id}
                  image={poke.sprites.other.dream_world.front_default}
                  name={poke.name}
                  type={poke.types.map((item: pokeProps) => item.type.name)}
                />
              </Content>
            ))
          : allPokemons.map(poke => (
              <Content key={poke.id}>
                <PokeCard
                  id={poke.id}
                  image={poke.sprites.other.dream_world.front_default}
                  name={poke.name}
                  type={poke.types.map((item: pokeProps) => item.type.name)}
                />
              </Content>
            ))}
      </Container>
    </>
  );
};

export default Home;
