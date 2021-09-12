import React, { useState, useEffect } from 'react';

import { api } from '~/services/api';

import { Container } from './styles';

type InputProps = {
  name: string;
};

type ChangeValue = {
  onChangeValue: (value: string) => void;
  value: string;
};

export const PokeTypes: React.FC<ChangeValue> = ({ onChangeValue, value }) => {
  const [types, setTypes] = useState<InputProps[]>([]);

  useEffect(() => {
    api
      .getTypesList()
      .then((response: { results: React.SetStateAction<InputProps[]> }) =>
        setTypes(response.results)
      );
  }, []);

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
          {types.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </Container>
  );
};
