import React, { useState } from 'react';

import { Container } from './styles';

export const PokeSortBy = () => {
  const [sort] = useState(['ID', 'Name']);

  return (
    <Container>
      <label htmlFor="pokemon_sort">
        ORDER BY:
        <select name="Sort" id="pokemon_sort">
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
