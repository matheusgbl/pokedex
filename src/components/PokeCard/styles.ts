import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Card = styled.div`
  font-family: 'Early GameBoy', sans-serif;
  padding: 20px;
  background-color: #333;
  width: 220px;
  height: 320px;
  margin-bottom: 20px;
  margin-left: 20px;
  align-items: center;
  text-align: center;
  border-radius: 20px;
  transition: all 0.5s;
  box-shadow: 0 1.6px 1.6px rgb(0 0 0 / 2%), 0 3.8px 3.8px rgb(0 0 0 / 3%),
    0 6.9px 6.9px rgb(0 0 0 / 4%), 0 11.4px 11.4px rgb(0 0 0 / 5%),
    0 18.8px 18.8px rgb(0 0 0 / 6%), 0 32.8px 32.8px rgb(0 0 0 / 7%),
    0 71px 71px rgb(0 0 0 / 9%);

  &:hover {
    filter: brightness(1.15);
    transform: scale(1.1);
    cursor: pointer;
  }

  h3 {
    color: ${props => props.theme.colors.text};
    opacity: 0.95;
    letter-spacing: -1px;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
  }

  p {
    text-align: center;
  }

  .bg-color {
    background: #111;
    opacity: 0.08;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 90px;
    margin-top: -10px;
    position: absolute;
  }

  .poke-id {
    color: ${props => props.theme.colors.background};
    text-align: left;
    font-weight: 600;
    margin-bottom: 10px;
    align-items: center;
  }

  .info-icon {
    position: absolute;
    margin-top: -35px;
    margin-left: 140px;
    color: ${props => props.theme.colors.background};
  }

  .poke-type {
    display: flex;
    grid-gap: 0 10px;
    gap: 0 20px;
    align-items: center;
    justify-content: center;
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

  .poke-type-bg:hover {
    filter: saturate(200%);
    transform: scale(1.1);
  }

  .poke-type-bg img {
    height: 60%;
    width: 60%;
    margin: 20%;
  }

  .bug {
    background: #92bc2c;
    box-shadow: 0 0 20px #92bc2c;
  }

  .dark {
    background: #595761;
    box-shadow: 0 0 20px #595761;
  }

  .dragon {
    background: #0c69c8;
    box-shadow: 0 0 20px #0c69c8;
  }

  .electric {
    background: #f5bc4e;
    box-shadow: 0 0 20px #f5bc4e;
  }

  .fire {
    background: #fba54c;
    box-shadow: 0 0 20px #fba54c;
  }

  .fairy {
    background: #ee90e6;
    box-shadow: 0 0 20px #ee90e6;
  }

  .fighting {
    background: #d3425f;
    box-shadow: 0 0 20px #d3425f;
  }

  .flying {
    background: #a1bbec;
    box-shadow: 0 0 20px #a1bbec;
  }

  .ghost {
    background: #5f6dbc;
    box-shadow: 0 0 20px #5f6dbc;
  }

  .grass {
    background: #5fbd58;
    box-shadow: 0 0 20px #5fbd58;
  }

  .ground {
    background: #da7c4d;
    box-shadow: 0 0 20px #da7c4d;
  }

  .ice {
    background: #75d0c1;
    box-shadow: 0 0 20px #75d0c1;
  }

  .normal {
    background: #a0a29f;
    box-shadow: 0 0 20px #a0a29f;
  }

  .poison {
    background: #b763cf;
    box-shadow: 0 0 20px #b763cf;
  }

  .psychic {
    background: #fa8581;
    box-shadow: 0 0 20px #fa8581;
  }

  .rock {
    background: #c9bb8a;
    box-shadow: 0 0 20px #c9bb8a;
  }

  .steel {
    background: #5695a3;
    box-shadow: 0 0 20px #5695a3;
  }

  .water {
    background: #539ddf;
    box-shadow: 0 0 20px #539ddf;
  }
`;
