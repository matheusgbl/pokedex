/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Tooltip, withStyles, Zoom } from '@material-ui/core';
import { colorTypeGradients } from '../../utils/utils';
import Image from 'next/image';

import { Container, Card } from './styles';
import Link from 'next/link';

type PokeCardProps = {
  id: string,
  name: string,
  image: string,
  type: string[],
}

export const PokeCard = (
  { id, name, image, type}: PokeCardProps
  ) => {
    const LightTooltip = withStyles((theme) => ({
      tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
      },
    }))(Tooltip);

    let finalColor;

    if (type.length === 2) {
        finalColor = colorTypeGradients(type[0], type[1], type.length);
    } else {
        finalColor = colorTypeGradients(type[0], type[0], type.length);
    }

    return (
      <Container className='poke_card' key={id}>
        <Link href='/pokemonInfo' passHref={true}>
          <Card
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={
              { 
                background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})` 
              }
            }>
            <div className="poke-id">
              # {String(id).padStart(3, '0')}
            </div>
            <div className="bg-color" />
            <Image
              loading="lazy"
              alt="image-pokemon"
              height={150}
              width={150}
              src={image}
              blurDataURL={image}
              placeholder="blur"
              className="img__thumbnail"
              />
            <h3>{name}</h3>
            <div className="poke-type">
            {type.map((pokeType) => (
              <LightTooltip
                TransitionComponent={Zoom}
                key={pokeType} 
                title={pokeType}
                arrow
              >
                <div className={`poke-type-bg ${pokeType}`}>
                  <img src={`${pokeType}.svg`} alt="Pokemon type" />
                </div>
              </LightTooltip>
            ))}
            </div>
          </Card>
        </Link>
      </Container>
    );
}