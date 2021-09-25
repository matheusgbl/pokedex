import React from 'react';
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai';
import { BsShieldShaded } from 'react-icons/bs';
import { GiPunchBlast } from 'react-icons/gi';
import { HiArrowNarrowRight } from 'react-icons/hi';

import Image from 'next/image';

import { colorTypeGradients } from '~/utils/utils';

import {
  Container,
  CardContent,
  BasicInfo,
  Status,
  Types,
  BaseStats,
  About,
  SecondContentInfo,
  Abilities,
  Moves,
  OtherStats,
  EvolutionChain,
} from './styles';

type DetailsProps = {
  name: string;
  id: number;
  image: string;
  hp: string;
  attack: string;
  genera: string;
  about: string;
  defense: string;
  abilities: [
    {
      ability: {
        name: string;
      };
    }
  ];
  weight: number;
  height: number;
  moves: [
    {
      move: {
        name: string;
      };
    }
  ];
  evoDetails: [
    {
      id: string;
      name: string;
      sprites: {
        other: {
          dream_world: {
            front_default: string;
          };
        };
      };
    }
  ];
  type: string[];
  handleClose: (e: any) => void;
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
  evoDetails,
  type,
  handleClose,
}: DetailsProps) => {
  let finalColor;

  if (type.length === 2) {
    finalColor = colorTypeGradients(type[0], type[1], type.length);
  } else {
    finalColor = colorTypeGradients(type[0], type[0], type.length);
  }

  return (
    <Container>
      <CardContent
        style={{
          background: `linear-gradient(${finalColor[0]}, ${finalColor[1]})`,
        }}
      >
        <AiOutlineClose
          onClick={e => handleClose(e)}
          size={30}
          className="close_btn"
        />
        <BasicInfo>
          <Status>
            <h2>NO. {String(id).padStart(3, '0')}</h2>
            <h2 className="pokemon_name">{name}</h2>
            <div className="pokemon_img">
              <Image
                src={image}
                alt={`pokemon ${name} image`}
                width={150}
                height={150}
                className="pokemon_img"
              />
            </div>
          </Status>
          <Types>
            <div className={`poke-type-bg-genera ${type[0]}`}>
              <p>{genera}</p>
            </div>
            <div className="poke-type">
              {type.map(pokeType => (
                <div key={pokeType} className={`poke-type-bg ${pokeType}`}>
                  <img src={`${pokeType}.svg`} alt="Pokemon type" />
                </div>
              ))}
            </div>
          </Types>
          <BaseStats>
            <div>
              <p>
                <AiFillHeart color="#ff1f1f" size={22} />
                HP
                <br />
                {hp}
              </p>
              <p>
                <GiPunchBlast color="#fff" size={22} />
                Attack
                <br />
                {attack}
              </p>
              <p>
                <BsShieldShaded color="#0f74e7" size={22} />
                Defense
                <br />
                {defense}
              </p>
            </div>
          </BaseStats>
          <OtherStats>
            <h2>Weight</h2>
            <p>
              {(weight / 10).toFixed(1)} kg / {(weight * 0.2205).toFixed(1)}{' '}
              lbs.
            </p>
            <h2>Height</h2>
            <p>
              {(height / 10).toFixed(1)} m /{' '}
              {((height / 10) * 3.281).toFixed(1)} ft.
            </p>
          </OtherStats>
        </BasicInfo>
        <SecondContentInfo>
          <About>
            <h2>About</h2>
            <p>{about}</p>
          </About>
          <Abilities>
            <h2>Abilities</h2>
            <div>
              {abilities.map(({ ability }) => (
                <li key={ability.name}>{ability.name}</li>
              ))}
            </div>
          </Abilities>
          <Moves>
            <h2>Main moves</h2>
            <div>
              {moves.slice(0, 6).map(({ move }) => (
                <li key={move.name}>{move.name}</li>
              ))}
            </div>
          </Moves>
          <EvolutionChain>
            <h2>Evolution</h2>
            <div className="evochain_container">
              {evoDetails.map((item, index) => (
                <div className="evochain_content" key={item.id}>
                  <div className="evochain_info">
                    <div className="bg-color" />
                    <Image
                      src={
                        item.sprites.other.dream_world.front_default ||
                        item.sprites.other['official-artwork'].front_default
                      }
                      alt={`pokemon image`}
                      width={80}
                      height={80}
                      loading="lazy"
                      blurDataURL={
                        item.sprites.other.dream_world.front_default ||
                        item.sprites.other['official-artwork'].front_default
                      }
                      placeholder="blur"
                    />
                    <p>{item.name}</p>
                  </div>
                  <HiArrowNarrowRight className={`arrow-${index}`} size={30} />
                </div>
              ))}
            </div>
          </EvolutionChain>
        </SecondContentInfo>
      </CardContent>
    </Container>
  );
};
