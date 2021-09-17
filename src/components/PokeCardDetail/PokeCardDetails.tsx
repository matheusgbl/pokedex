import React from 'react';

import Image from 'next/image';

import { Container } from './styles';

type DetailsProps = {
  name: string;
  id: number;
  image: any;
  hp: string;
  attack: string;
  genera: string;
  about: string;
  defense: string;
  abilities: string[];
  weight: number;
  height: number;
  moves: string[];
  evoImg: any[];
};

export const PokeCardDetails = ({
  name,
  id,
  image,
  genera,
  about,
  hp,
  attack,
  defense,
  abilities,
  moves,
  weight,
  height,
  evoImg,
}: DetailsProps) => {
  return (
    <Container>
      <div className="poke-id"># {String(id).padStart(3, '0')}</div>
      <Image
        src={image}
        alt={`pokemon ${name} image`}
        width={100}
        height={100}
      />
      <p>{name}</p>
      <p>{genera}</p>
      <p>{about}</p>
      <p>Base stats</p>
      <p>HP: {hp}</p>
      <p>ATTACK: {attack}</p>
      <p>DEFENSE: {defense}</p>
      <p>Abilities</p>
      <p>{abilities}</p>
      <p>Main moves</p>
      <p>{moves}</p>
      <p>Weight</p>
      <p>
        {(weight / 10).toFixed(1)} kg / {(weight * 0.2205).toFixed(1)} lbs
      </p>
      <p>Height</p>
      <p>
        {(height / 10).toFixed(1)} m / {((height / 10) * 3.281).toFixed(1)} ft
      </p>
      <div>
        {evoImg.map(item => (
          <Image
            key={item.id}
            src={item.sprites.other.dream_world.front_default}
            alt={`pokemon image`}
            width={100}
            height={100}
            loading="lazy"
            blurDataURL={image}
            placeholder="blur"
          />
        ))}
      </div>
    </Container>
  );
};
