import React, { useState } from 'react';

import { Container } from './styles';

type ChangeValue = {
  onChangeValue: (value: string) => void;
  value: string;
};

export const PokeSortBy = ({ onChangeValue, value }: ChangeValue) => {
  const [sort] = useState(['ID', 'Name']);

  return (
    <Container>
      <label htmlFor="pokemon_sort">
        ORDER BY:
        <select
          onChange={e => onChangeValue(e.target.value)}
          value={value}
          name="Sort"
          id="pokemon_sort"
        >
          {sort.map(sorted => (
            <option key={sorted} value={sorted}>
              {sorted}
            </option>
          ))}
        </select>
      </label>
    </Container>
  );
};
