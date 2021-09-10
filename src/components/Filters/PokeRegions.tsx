import React, { useState } from 'react';

import { Container } from './styles';

type InputProps = {
  name: string;
  limit: number;
  offset: number;
};

type ChangeValue = {
  onChangeValue: (value: any) => void;
  value: string;
};

export const PokeRegions: React.FC<ChangeValue> = ({
  onChangeValue,
  value,
}) => {
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

  return (
    <Container>
      <label htmlFor="pokemon_regions">
        REGION:
        <select
          name="Regions"
          id="pokemon_regions"
          onChange={e => onChangeValue(e.target.value)}
          value={value}
        >
          {regions.map(({ name, offset, limit }) => (
            <option key={name} value={name}>
              {name}&nbsp;({offset + 1} - {limit + offset})
            </option>
          ))}
        </select>
      </label>
    </Container>
  );
};
