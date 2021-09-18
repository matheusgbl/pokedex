import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { BsShieldShaded } from 'react-icons/bs';
import { GiPunchBlast } from 'react-icons/gi';
import { HiArrowNarrowRight } from 'react-icons/hi';

import Image from 'next/image';
import Link from 'next/link';

import { colorTypeGradients } from '~/utils/utils';

import {
  Container,
  CardContent,
  BasicInfo,
  Status,
  BaseStats,
  AboutName,
  InfoAndAbilityContent,
  Abilities,
  Moves,
  OtherStats,
  EvolutionChain,
} from './styles';

type DetailsProps = {
  name: string;
  id: number;
  image: any;
  hp: string;
  attack: string;
  genera: string;
  about: string;
  defense: string;
  abilities: any[];
  weight: number;
  height: number;
  moves: any[];
  evoImg: any[];
  type: string[];
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
  type,
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
            <div className={`poke-type-bg-genera ${type[0]}`}>
              <p>{genera}</p>
            </div>
          </Status>
          <div className="poke-type">
            {type.map(pokeType => (
              <div key={pokeType} className={`poke-type-bg ${pokeType}`}>
                <img src={`${pokeType}.svg`} alt="Pokemon type" />
              </div>
            ))}
          </div>
          <BaseStats>
            <div>
              <p>
                <AiFillHeart color="#ff1f1f" size={22} />
                HP {hp}
              </p>
              <p>
                <GiPunchBlast color="#fff" size={22} />
                Attack {attack}
              </p>
              <p>
                <BsShieldShaded color="#0f74e7" size={22} />
                Defense {defense}
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
        <InfoAndAbilityContent>
          <AboutName>
            <h2>About</h2>
            <p>{about}</p>
          </AboutName>
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
            <div>
              {evoImg.map(item => (
                <>
                  <div key={item.id} className={`poke-type-bg ${type[0]}`}>
                    <Link href={`${item.id}`} passHref={true}>
                      <Image
                        src={item.sprites.other.dream_world.front_default}
                        alt={`pokemon image`}
                        width={80}
                        height={80}
                        loading="lazy"
                        blurDataURL={image}
                        placeholder="blur"
                      />
                    </Link>
                  </div>
                  <HiArrowNarrowRight size={30} />
                </>
              ))}
            </div>
          </EvolutionChain>
        </InfoAndAbilityContent>
      </CardContent>
    </Container>
  );
};
