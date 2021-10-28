import React, { useState } from 'react';

import { Container } from './styles';

type ChangeValue = {
  onChangeValue: (value: string) => void;
  value: string;
};

export const PokeTypes: React.FC<ChangeValue> = ({ onChangeValue, value }) => {
  const [types] = useState([
    'grass',
    'bug',
    'dark',
    'dragon',
    'electric',
    'fairy',
    'fighting',
    'fire',
    'flying',
    'ghost',
    'ground',
    'ice',
    'normal',
    'poison',
    'psychic',
    'rock',
    'steel',
    'water',
  ]);

  return (
    <Container>
      <label htmlFor="pokemon_types">
        TYPE:
        <select
          onChange={e => onChangeValue(e.target.value)}
          value={value}
          name="Types"
          id="pokemon_types"
        >
          <option>All types</option>
          {types.map(type => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
    </Container>
  );
};
