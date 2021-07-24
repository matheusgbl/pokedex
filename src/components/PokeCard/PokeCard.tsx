/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Tooltip, withStyles, Zoom } from '@material-ui/core';

import { Container, Card } from './styles';

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

    return (
      <Container key={id}>
        <Card>
          <div className="poke-id">
            # {String(id).padStart(3, '0')}
          </div>
          <LazyLoadImage
            alt="image-pokemon"
            height={150}
            src={image}
            visibleByDefault={false}
            delayMethod={'debounce'}
            effect="blur"
            className="img__thumbnail"
            />
          <h3>{name}</h3>
          <div className="poke-type">
          {type.map((type) => (
            <LightTooltip
              TransitionComponent={Zoom}
              key={type} 
              title={type}
              arrow
            >
              <div className={`poke-type-bg ${type}`}>
                <img src={`${type}.svg`} alt="pokemon type" />
              </div>
            </LightTooltip>
          ))}
          </div>
        </Card>
      </Container>
    );
}