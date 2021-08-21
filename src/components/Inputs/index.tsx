import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

type InputProps = {
  name: string;
  limit: number;
  offset: number;
};

type ChangeValue = {
  onChangeValue: (value: string) => void;
  value: string;
};

export const Inputs: React.FC<ChangeValue> = ({ onChangeValue, value }) => {
  const [regions] = useState<InputProps[]>([
    {
      name: 'Kanto',
      limit: 151,
      offset: 0,
    },
    {
      name: 'Johto',
      limit: 100,
      offset: 151,
    },
    {
      name: 'Hoenn',
      limit: 135,
      offset: 251,
    },
    {
      name: 'Sinnoh',
      limit: 108,
      offset: 386,
    },
    {
      name: 'Unova',
      limit: 155,
      offset: 494,
    },
    {
      name: 'Kalos',
      limit: 72,
      offset: 649,
    },
    {
      name: 'Alola',
      limit: 88,
      offset: 721,
    },
    {
      name: 'Galar',
      limit: 89,
      offset: 809,
    },
  ]);
  const [types, setTypes] = useState<InputProps[]>([]);
  const [sort] = useState(['ID', 'Name']);

  useEffect(() => {
    api.get('/type').then(response => setTypes(response.data.results));
  }, []);

  return (
    <Container>
      <label htmlFor="pokemon_regions">
        REGION:
        <select name="Regions" id="pokemon_regions">
          <option>Select region</option>
          {regions.map(({ name, offset, limit }) => (
            <option key={name} value={name}>
              {name}&nbsp;({offset + 1} - {limit + offset})
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="pokemon_types">
        TYPE:
        <select name="Types" id="pokemon_types">
          <option>All types</option>
          {types.map(({ name }) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="pokemon_sort">
        ORDER BY:
        <select name="Sort" id="pokemon_sort">
          <option>Select one</option>
          {sort.map(sorted => (
            <option key={sorted} value={sorted}>
              {sorted}
            </option>
          ))}
        </select>
      </label>

      <label htmlFor="pokemon_search">
        SEARCH:
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
