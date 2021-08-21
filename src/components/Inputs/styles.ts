import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: space-evenly;

  label {
    font-size: 18px;
    color: white;
    font-weight: 600;
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
    border: none;
    border-radius: 5px;
    height: 1.3rem;
    text-indent: 0.3rem;
    width: 10rem;
  }

  svg {
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
  }
`;
