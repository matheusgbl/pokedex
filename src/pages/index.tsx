import React, { useContext, useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';

import { PokeRegions } from '~/components/Filters/PokeRegions';
import { PokeSortBy } from '~/components/Filters/PokeSortBy';
import { PokeTypes } from '~/components/Filters/PokeTypes';
import { Header } from '~/components/Header/Header';
import { PokeLoading } from '~/components/Loading/PokeLoading';
import PokeCard from '~/components/PokeCard/PokeCard';
import { PokeCardDetails } from '~/components/PokeCardDetail/PokeCardDetails';
import ScrollToTop from '~/components/ScrollToTop/ScrollToTop';
import { PokeSearch } from '~/components/SearchBar/PokeSearch';
import { PokemonContext } from '~/Context/PokemonContext';
import GetPokemonEvolution from '~/hooks/GetPokemonEvolution';
import api from '~/services/api';
import GlobalStyle from '~/styles/globals';
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
  abilities: [];
  stats: {
    base_stat: string;
  };
  moves: [];
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
  const {
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
    evoData,
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
      if (filteredPokemons.length === 0) {
        return (
          <div className="pokemon_not_found">
            <h2>There are no pokémon in this region :/</h2>
          </div>
        );
      }
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
            onSelectCard={() => handlePokemon(poke)}
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
            onSelectCard={() => handlePokemon(poke)}
          />
        </ContentAnimated>
      ));
    }
  };

  const renderModal = () => {
    const { genera, flavor_text_entries } = pokeSpecies;
    const {
      name,
      height,
      id,
      weight,
      abilities,
      sprites,
      stats,
      moves,
      types,
    } = pokemonEvoDetail;
    const img =
      sprites.other.dream_world.front_default ||
      sprites.other['official-artwork'].front_default;

    const hp = stats[1].base_stat;
    const attack = stats[2].base_stat;
    const defense = stats[3].base_stat;
    const move = moves.slice(0, 6);
    const type = types.map((item: pokeProps) => item.type.name);

    const handleClose = () => setIsSelected(false);
    return (
      <PokeCardDetails
        id={id}
        name={name}
        image={img}
        hp={hp}
        attack={attack}
        defense={defense}
        abilities={abilities}
        moves={move}
        height={height}
        weight={weight}
        genera={genera}
        about={flavor_text_entries}
        evoDetails={evoData}
        type={type}
        handleClose={handleClose}
        modalOpen={isSelected}
        modalClose={handleClose}
      />
    );
  };

  return (
    <>
      <GlobalStyle />
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
          {isSelected ? renderModal() : null}
          <ScrollToTop />
        </>
      )}
    </>
  );
};

export default Home;
