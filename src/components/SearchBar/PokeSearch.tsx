import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './styles';

type ChangeValue = {
  onChangeValue: (value: string) => void;
  value: string;
};

export const PokeSearch: React.FC<ChangeValue> = ({ onChangeValue, value }) => {
  return (
    <Container>
      <label htmlFor="pokemon_search">
        SEARCH:
        <MdSearch />
        <input
          onChange={e => onChangeValue(e.target.value)}
          value={value}
          type="text"
          id="pokemon_search"
          placeholder="Search pokémon"
        />
      </label>
    </Container>
  );
};
