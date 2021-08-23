import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Early GameBoy', sans-serif;
  gap: 18rem;

  label {
    font-size: 16px;
    color: white;
    font-weight: 600;
    text-align: center;
  }

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
    text-transform: capitalize;
  }
`;
