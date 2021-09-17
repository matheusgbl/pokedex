import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 5rem;
`;

export const CardContent = styled.div`
  background-color: azure;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80vh;
`;

export const BasicInfo = styled.aside`
  width: 32%;
  height: 100%;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px 0 0 20px;

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
    margin-top: 10px;
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

export const AboutName = styled.aside``;

export const InfoAndAbilityContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

export const Abilities = styled.div`
  width: 100%;
  h2 {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const Moves = styled.div`
  h2 {
    text-align: center;
  }

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const EvolutionChain = styled.div`
  h2 {
    text-align: center;
  }
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    svg {
      color: white;

      &:last-child {
        display: none;
      }
    }
  }
`;
