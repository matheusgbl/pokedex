import styled from "styled-components";

export const Container = styled.div`
  display: flex;
`

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
  transition: all 0.2s;
  
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 8px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: white;
    letter-spacing: -1px;
  }

  h3::first-letter {
    text-transform: capitalize;
  }

  p {
    text-align: center;
  }

  .bg-color {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    padding: 90px;
    margin-top: -10px;
    position: absolute;
  }

  .poke-id {
    color: white;
    text-align: left;
    font-weight: 600;
    margin-bottom: 10px;
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
    transition: 200ms all
  }

  .poke-type-bg:hover{
    filter: saturate(200%);
    transform: scale(1.1);
    cursor: pointer;
  }

  .poke-type-bg img {
    height: 60%;
    width: 60%;
    margin: 20%;
  }

  .bug {
    background: #92BC2C;
    box-shadow: 0 0 20px #92BC2C;
  }

  .dark {
    background: #595761;
    box-shadow: 0 0 20px #595761;
  }

  .dragon {
    background: #0C69C8;
    box-shadow: 0 0 20px #0C69C8;
  }

  .electric {
    background: #F2D94E;
    box-shadow: 0 0 20px #F2D94E;
  }

  .fire {
    background: #FBA54C;
    box-shadow: 0 0 20px #FBA54C;
  }

  .fairy {
    background: #EE90E6;
    box-shadow: 0 0 20px #EE90E6;
  }

  .fighting {
    background: #D3425F;
    box-shadow: 0 0 20px #D3425F;
  }

  .flying {
    background: #A1BBEC;
    box-shadow: 0 0 20px #A1BBEC;
  }

  .ghost {
    background: #5F6DBC;
    box-shadow: 0 0 20px #5F6DBC;
  }

  .grass {
    background: #5FBD58;
    box-shadow: 0 0 20px #5FBD58;
  }

  .ground {
    background: #DA7C4D;
    box-shadow: 0 0 20px #DA7C4D;
  }

  .ice {
    background: #75D0C1;
    box-shadow: 0 0 20px #75D0C1;
  }

  .normal {
    background: #A0A29F;
    box-shadow: 0 0 20px #A0A29F;
  }

  .poison {
    background: #B763CF;
    box-shadow: 0 0 20px #B763CF;
  }

  .psychic {
    background: #FA8581;
    box-shadow: 0 0 20px #FA8581;
  }

  .rock {
    background: #C9BB8A;
    box-shadow: 0 0 20px #C9BB8A;
  }

  .steel {
    background: #5695A3;
    box-shadow: 0 0 20px #5695A3;
  }

  .water {
    background: #539DDF;
    box-shadow: 0 0 20px #539DDF;
  }
`