import React, { useEffect } from 'react';

import gsap from 'gsap';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import PokeCard from '~/components/PokeCard/PokeCard';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import GetPokemonData, { pokeProps } from '~/hooks/GetPokemonData';
import { Container, FilterAndSearch, Content } from '~/styles/pages/home';

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
      <Content key={poke.id}>
        <PokeCard
          id={poke.id}
          image={poke.sprites.other.dream_world.front_default}
          name={poke.name}
          type={poke.types.map((item: pokeProps) => item.type.name)}
        />
      </Content>
    ));
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
  }, [allPokemons]);

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
