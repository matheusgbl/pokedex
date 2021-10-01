import React, { useContext, useEffect, useState } from 'react';

import { Modal } from '@material-ui/core';
import { useAnimation } from 'framer-motion';
import { ThemeProvider } from 'styled-components';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import { PokeLoading } from '~/components/Loading/PokeLoading';
import PokeCard from '~/components/PokeCard/PokeCard';
import { PokeCardDetails } from '~/components/PokeCardDetail/PokeCardDetails';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import { PokemonContext } from '~/Context/PokemonContext';
import GetPokemonEvolution from '~/hooks/GetPokemonEvolution';
import GlobalStyle from '~/styles/globals';
import {
  Container,
  FilterAndSearch,
  Content,
  ContentAnimated,
} from '~/styles/pages/home';
import { dark, light } from '~/styles/themes';

type pokeProps = {
  id: number;
  name: string;
  image: string;
  type: {
    name: string;
  };
  types: [];
  sprites: any;
  pokemons: [];
};

const Home = () => {
  const {
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
  } = useContext(PokemonContext);

  const {
    pokeSpecies,
    isSelected,
    as,
    pokemonEvoDetail,
    setIsSelected,
    handlePokemon,
  } = GetPokemonEvolution();

  const controls = useAnimation();

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
  }, [controls, isLoading]);

  const renderPokemons = () => {
    if (isFiltered) {
      return filteredPokemons.map((poke: pokeProps) => (
        <Content key={poke.id}>
          <PokeCard
            id={poke.id}
            image={
              poke.sprites.other.dream_world.front_default ||
              poke.sprites.other['official-artwork'].front_default
            }
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
            onSelectCard={handlePokemon}
          />
        </Content>
      ));
    } else {
      return pokemons.map((poke: pokeProps, index: any) => (
        <ContentAnimated key={poke.id} custom={index} animate={controls}>
          <PokeCard
            id={poke.id}
            image={
              poke.sprites.other.dream_world.front_default ||
              poke.sprites.other['official-artwork'].front_default
            }
            name={poke.name}
            type={poke.types.map((item: pokeProps) => item.type.name)}
            onSelectCard={handlePokemon}
          />
        </ContentAnimated>
      ));
    }
  };

  const showModal = () => {
    const { name, id, genera, flavor_text_entries } = pokeSpecies;
    const pokeGenera = genera
      .filter(gen => gen.language.name === 'en')
      .map(gen => gen.genus)
      .toString();

    const flavText = flavor_text_entries.filter(
      flav => flav.language.name === 'en'
    )[0].flavor_text;

    const handleClose = (prevState: any) => setIsSelected(!prevState);
    return (
      <>
        <Modal
          open={isSelected}
          onClose={prevState => setIsSelected(!prevState)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <>
            <PokeCardDetails
              id={id}
              name={name}
              image={pokemonEvoDetail.sprites.other.dream_world.front_default}
              hp={pokemonEvoDetail.stats[0].base_stat}
              attack={pokemonEvoDetail.stats[1].base_stat}
              defense={pokemonEvoDetail.stats[2].base_stat}
              abilities={pokemonEvoDetail.abilities}
              moves={pokemonEvoDetail.moves}
              height={pokemonEvoDetail.height}
              weight={pokemonEvoDetail.weight}
              genera={pokeGenera}
              about={flavText.replace('', ' ').replace('POKéMON', 'POKÉMON')}
              evoDetails={as}
              type={pokemonEvoDetail.types.map(
                (item: { type: { name: string } }) => item.type.name
              )}
              handleClose={handleClose}
            />
          </>
        </Modal>
      </>
    );
  };

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? light : dark}>
      <GlobalStyle />
      {isLoading ? (
        <PokeLoading />
      ) : (
        <>
          <Header currTheme={theme} toggleTheme={toggleTheme} />
          <FilterAndSearch>
            <PokeRegions value={selectedRegion} onChangeValue={handleRegion} />
            <PokeTypes value={typeFilter} onChangeValue={handleType} />
            <PokeSortBy value={sortBy} onChangeValue={handleSort} />
            <PokeSearch value={search} onChangeValue={handleSearch} />
          </FilterAndSearch>
          <Container>{renderPokemons()}</Container>
          {isSelected ? showModal() : null}
        </>
      )}
    </ThemeProvider>
  );
};

export default Home;
