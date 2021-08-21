import React, { useEffect, useState } from 'react';

import gsap from 'gsap';

import { Header } from '~/components/Header/Header';
import { Inputs } from '~/components/Inputs';
import { PokeCard } from '~/components/PokeCard/PokeCard';
import api from '~/services/api';
import { Container, Content } from '~/styles/pages/home';

type pokeProps = {
  id: string;
  name: string;
  image: string;
  type: {
    name: string;
  };
};

const Home = () => {
  const [allPokemons, setAllPokemons] = useState<pokeProps[]>([]);

  const getPokemonData = async (result: any) => {
    const pokemonArr: any[] = [];

    await Promise.all(
      result.map(async (pokemon: { name: string }) => {
        const result = await api.get(`/pokemon/${pokemon.name}`);
        pokemonArr.push(result.data);
      })
    );

    pokemonArr.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));
    setAllPokemons(pokemonArr);
  };

  useEffect(() => {
    try {
      api
        .get('/pokemon?limit=151&offset=0')
        .then(response => getPokemonData(response.data.results));
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    gsap.timeline().fromTo(
      '.poke_card',
      {
        y: 160,
        opacity: 0,
      },
      {
        y: 0,
        stagger: 0.5,
        duration: 0.5,
        ease: 'back',
        opacity: 1,
      },
      '<1'
    );
  }, [allPokemons]);

  const pokemonsObjects = Object.keys(allPokemons);

  return (
    <>
      <Header />
      <Inputs />
      <Container>
        {pokemonsObjects.map(poke => (
          <Content key={allPokemons[poke].id}>
            <PokeCard
              id={allPokemons[poke].id}
              image={allPokemons[poke].sprites.other.dream_world.front_default}
              name={allPokemons[poke].name}
              type={allPokemons[poke].types.map(
                (item: pokeProps) => item.type.name
              )}
            />
          </Content>
        ))}
      </Container>
    </>
  );
};

export default Home;
