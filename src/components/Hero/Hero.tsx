import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { PokeCard } from '../PokeCard/PokeCard';
import { Container, Content } from './styles';

type pokeProps = {
  id: string;
  name: string;
  image: string;
  type: {
    name: string;
  };
}

export const Hero = () => {
  const [allPokemons, setAllPokemons] = useState<pokeProps[]>([]);

  const getPokemonData = async (result: any) => {
    const pokemonArr: any[] = [];

    await Promise.all(
      result.map(async (pokemon: { name: string; }) => {
        const result = await api.get(`/pokemon/${pokemon.name}`);
        pokemonArr.push(result.data);
      })
    );
    
    pokemonArr.sort((a, b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0));
    setAllPokemons(pokemonArr);
  }
  
  useEffect(() => {
    try {
      api.get('/pokemon?limit=151&offset=0')
      .then((response) => getPokemonData(response.data.results))
    } catch(err) {
      console.log(err);
    }
  }, []);

  const pokemonsObjects = Object.keys(allPokemons);
  return (
    <Container>
    {pokemonsObjects.map((poke) => (
      <Content key={allPokemons[poke].id}>
        <PokeCard
          id={allPokemons[poke].id}
          image={allPokemons[poke].sprites.other.dream_world.front_default}
          name={allPokemons[poke].name}
          type={allPokemons[poke].types.map((item: pokeProps ) => item.type.name)}
        />
      </Content>
    )
    )}
  </Container>
  )
}
