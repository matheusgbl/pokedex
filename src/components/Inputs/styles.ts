import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  font-family: 'Early GameBoy', sans-serif;

  label {
    font-size: 16px;
    color: white;
    font-weight: 600;
    text-align: center;
  }

  select,
  option {
    text-transform: capitalize;
  }

  input,
  select,
  option {
    outline: none;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 5px;
    height: 1.3rem;
    text-indent: 0.3rem;
    width: 10rem;
    display: flex;
  }

  /* svg {
    position: relative;
    right: 1.3rem;
    top: 0.4rem;
    color: black;
    background: #ff9000;
    height: 21px;
    width: 36px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    &:hover {
      cursor: pointer;
      filter: brightness(1.1);
    }
  } */
`;
