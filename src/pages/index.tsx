import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import { PokeLoading } from '~/components/Loading/PokeLoading';
import PokeCard from '~/components/PokeCard/PokeCard';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import GetPokemonData, { pokeProps } from '~/hooks/GetPokemonData';
import {
  Container,
  FilterAndSearch,
  Content,
  ContentAnimated,
} from '~/styles/pages/home';

const Home = () => {
  const controls = useAnimation();

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
    sortBy,
    handleSort,
    isLoading,
  } = GetPokemonData();

  const renderPokemons = () => {
    if (isFiltered) {
      return filteredPokemons.map(poke => (
        <Content key={poke.id}>
          <PokeCard
            id={poke.id}
            image={
              poke.sprites.other.dream_world.front_default ||
              poke.sprites.other['official-artwork'].front_default
            }
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
          />
        </Content>
      ));
    } else {
      return allPokemons.map((poke, index) => (
        <ContentAnimated key={poke.id} custom={index} animate={controls}>
          <PokeCard
            id={poke.id}
            image={
              poke.sprites.other.dream_world.front_default ||
              poke.sprites.other['official-artwork'].front_default
            }
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
          />
        </ContentAnimated>
      ));
    }
  };

  useEffect(() => {
    if (!isLoading) {
      controls.set(index => ({
        opacity: 0,
        y: 260,
        scale: 1.5,
        transition: { delay: index * 0.5, ease: 'anticipate' },
      }));
      controls.start(index => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { delay: index * 0.5 },
      }));
    }
  }, [controls, allPokemons, isLoading]);

  return (
    <>
      {isLoading ? (
        <PokeLoading />
      ) : (
        <>
          <Header />
          <FilterAndSearch>
            <PokeRegions value={selectedRegion} onChangeValue={handleRegion} />
            <PokeSortBy value={sortBy} onChangeValue={handleSort} />
            <PokeTypes value={typeFilter} onChangeValue={handleType} />
            <PokeSearch value={search} onChangeValue={handleSearch} />
          </FilterAndSearch>
          <Container>{renderPokemons()}</Container>
        </>
      )}
    </>
  );
};

export default Home;
