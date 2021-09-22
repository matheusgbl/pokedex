import React, { useContext, useEffect } from 'react';

import { Modal, Box } from '@material-ui/core';
import { useAnimation } from 'framer-motion';

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
import {
  Container,
  FilterAndSearch,
  Content,
  ContentAnimated,
} from '~/styles/pages/home';

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
    isMounted,
    pokemonEvoDetail,
    handlePokemon,
    setIsSelected,
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

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
    const { name, id, genera } = pokeSpecies;
    return (
      <>
        <Modal
          open={isSelected}
          onClose={prevState => setIsSelected(!prevState)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h1>Pokemon Details</h1>
            <PokeCardDetails
              id={id}
              name={name}
              // image={pokemonEvoDetail.map(
              //   item => item.sprites.other.dream_world.front_default
              // )}
              attack={pokemonEvoDetail.map(item => item.stats[1].base_stat)}
              defense={pokemonEvoDetail.map(item => item.stats[2].base_stat)}
              hp={pokemonEvoDetail.map(item => item.stats[0].base_stat)}
              // abilities={pokemonEvoDetail.map(item => item.abilities)}
              // moves={pokemonEvoDetail.map(item => item.moves)}
              height={pokemonEvoDetail.map(item => item.height)}
              weight={pokemonEvoDetail.map(item => item.weight)}
              // genera={pokemonGenera}
              // about={flavText.replace('', ' ').replace('POKéMON', 'POKÉMON')}
              evoDetails={pokemonEvoDetail}
              // type={pokemonEvoDetail
              //   .map(item => item.types)
              //   .map((item: { type: { name: any } }) => item.type.name)}
            />
          </Box>
        </Modal>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
        <PokeLoading />
      ) : (
        <>
          <Header />
          <FilterAndSearch>
            <PokeRegions value={selectedRegion} onChangeValue={handleRegion} />
            <PokeTypes value={typeFilter} onChangeValue={handleType} />
            <PokeSortBy value={sortBy} onChangeValue={handleSort} />
            <PokeSearch value={search} onChangeValue={handleSearch} />
          </FilterAndSearch>
          <Container>{renderPokemons()}</Container>
          {/* {isMounted ? showModal() : null} */}
        </>
      )}
    </>
  );
};

export default Home;
