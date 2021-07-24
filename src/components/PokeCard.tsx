import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

type PokeCardProps = {
  id: string,
  name: string,
  image: string,
  type: string,
}

export const PokeCard = (
  { id, name, image, type}: PokeCardProps
  ) => {
    console.log(type);
    return (
      <div key={id}>
        <h3>{name}</h3>
        <LazyLoadImage
          alt="image-pokemon"
          height={500}
          src={image}
          visibleByDefault={false}
          delayMethod={'debounce'}
          effect="blur"
          className="img__thumbnail"
        />
        <div>
          <p>{type[0]}</p>
          <p>{type[1]}</p>
        </div>
      </div>
      
    );
}