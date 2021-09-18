import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 5rem;
`;

export const CardContent = styled.div`
  background-color: #333;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100%;
`;

export const BasicInfo = styled.aside`
  width: 32%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px 0 0 20px;
  color: white;

  .pokemon_name {
    font-family: 'Early GameBoy', sans-serif;
  }

  .pokemon_img {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .poke-type-bg-genera {
    width: 80%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 10px;
    font-weight: 700;
  }

  .poke-type {
    display: flex;
    grid-gap: 0 10px;
    gap: 0 20px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

  .poke-type-bg {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    transition: 200ms all;
  }

  .poke-type-bg img {
    height: 60%;
    width: 60%;
    margin: 20%;
  }

  .bug {
    background: #92bc2c;
  }

  .dark {
    background: #595761;
  }

  .dragon {
    background: #0c69c8;
  }

  .electric {
    background: #f5bc4e;
  }

  .fire {
    background: #fba54c;
  }

  .fairy {
    background: #ee90e6;
  }

  .fighting {
    background: #d3425f;
  }

  .flying {
    background: #a1bbec;
  }

  .ghost {
    background: #5f6dbc;
  }

  .grass {
    background: #5fbd58;
  }

  .ground {
    background: #da7c4d;
  }

  .ice {
    background: #75d0c1;
  }

  .normal {
    background: #a0a29f;
  }

  .poison {
    background: #b763cf;
  }

  .psychic {
    background: #fa8581;
  }

  .rock {
    background: #c9bb8a;
  }

  .steel {
    background: #5695a3;
  }

  .water {
    background: #539ddf;
  }
`;

export const Status = styled.div`
  h2 {
    text-align: center;
    &::first-letter {
      text-transform: uppercase;
    }
  }

  .pokemon_img {
    display: flex;
    justify-content: center;
  }
`;

export const BaseStats = styled.div`
  div {
    display: flex;
    justify-content: center;
    font-weight: 600;
    margin-bottom: 10px;
    span {
      margin-left: 10px;
    }

    & > p {
      margin-left: 15px;
    }
    svg {
      margin-right: 5px;
      display: flex;
      margin: 5px auto;
    }
  }
`;

export const OtherStats = styled.div`
  position: relative;
  top: -30px;
`;

export const AboutName = styled.aside`
  & > p {
    background-color: #444;
    border-radius: 20px;
    max-width: 40rem;
    min-height: 5rem;
    padding: 0 10px;
    align-items: center;
    justify-content: center;
    display: flex;
  }
`;

export const InfoAndAbilityContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 0 40px;
  color: white;

  h2 {
    font-family: 'Early GameBoy', sans-serif;
  }
`;

export const Abilities = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    max-width: 18rem;
    background-color: #444;
    border-radius: 20px;
    min-height: 4rem;
    align-items: center;
    padding: 0 10px;
    list-style: none;

    li:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const Moves = styled.div`
  & > div {
    display: flex;
    justify-content: space-between;
    max-width: auto;
    background-color: #444;
    border-radius: 20px;
    min-height: 4rem;
    align-items: center;
    padding: 0 10px;
    list-style: none;

    li:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const EvolutionChain = styled(motion.div)`
  .poke-type-bg {
    border-radius: 50%;
    width: 110px;
    height: 110px;

    &:hover {
      cursor: pointer;
    }
  }

  div {
    display: flex;
    max-width: 80%;
    justify-content: space-around;
    align-items: center;

    svg {
      color: black;

      &:last-child {
        display: none;
      }
    }
  }

  .bug {
    background: linear-gradient(#92bc2c, #fff);
  }

  .dark {
    background: linear-gradient(#595761, #fff);
  }

  .dragon {
    background: linear-gradient(#0c69c8, #fff);
  }

  .electric {
    background: linear-gradient(#f5bc4e, #fff);
  }

  .fire {
    background: linear-gradient(#fba54c, #fff);
  }

  .fairy {
    background: linear-gradient(#ee90e6, #fff);
  }

  .fighting {
    background: linear-gradient(#d3425f, #fff);
  }

  .flying {
    background: linear-gradient(#a1bbec, #fff);
  }

  .ghost {
    background: linear-gradient(#5f6dbc, #fff);
  }

  .grass {
    background: linear-gradient(#5fbd58, #fff);
  }

  .ground {
    background: linear-gradient(#da7c4d, #fff);
  }

  .ice {
    background: linear-gradient(#75d0c1, #fff);
  }

  .normal {
    background: linear-gradient(#a0a29f, #fff);
  }

  .poison {
    background: linear-gradient(#b763cf, #fff);
  }

  .psychic {
    background: linear-gradient(#fa8581, #fff);
  }

  .rock {
    background: linear-gradient(#c9bb8a, #fff);
  }

  .steel {
    background: linear-gradient(#5695a3, #fff);
  }

  .water {
    background: linear-gradient(#539ddf, #fff);
  }
`;
