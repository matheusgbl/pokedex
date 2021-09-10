import React from 'react';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import PokeCard from '~/components/PokeCard/PokeCard';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import GetPokemonData, { pokeProps } from '~/hooks/GetPokemonData';
import {
  Container,
  FilterAndSearch,
  AnimationContainer,
  Content,
} from '~/styles/pages/home';

const Home = () => {
  const {
    filteredPokemons,
    isFiltered,
    allPokemons,
    selectedRegion,
    handleRegion,
    typeFilter,
    handleType,
    search,
    handleSearch,
  } = GetPokemonData();

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.35,
        delayChildren: 0.75,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const items = {
    visible: { opacity: 1, y: 0, scale: 1 },
    hidden: { opacity: 0, y: 260, scale: 1.5 },
  };
  const renderPokemons = () => {
    if (isFiltered) {
      return filteredPokemons.map(poke => (
        <Content key={poke.id}>
          <PokeCard
            id={poke.id}
            image={poke.sprites.other.dream_world.front_default}
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
          />
        </Content>
      ));
    }
    return allPokemons.map(poke => (
      <AnimationContainer
        key={poke.id}
        initial="hidden"
        animate="visible"
        variants={list}
      >
        <Content variants={items}>
          <PokeCard
            id={poke.id}
            image={poke.sprites.other.dream_world.front_default}
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
          />
        </Content>
      </AnimationContainer>
    ));
  };

  return (
    <>
      <Header />
      <FilterAndSearch>
        <PokeRegions value={selectedRegion} onChangeValue={handleRegion} />
        <PokeSortBy />
        <PokeTypes value={typeFilter} onChangeValue={handleType} />
        <PokeSearch value={search} onChangeValue={handleSearch} />
      </FilterAndSearch>
      <Container>{renderPokemons()}</Container>
    </>
  );
};

export default Home;
