import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  font-family: 'Early GameBoy', sans-serif;

  label {
    font-size: 16px;
    color: ${props => props.theme.colors.text};
    font-weight: 600;
    text-align: center;
  }

  input {
    outline: none;
    margin-bottom: 1.5rem;
    margin-top: 0.5rem;
    border: ${props => props.theme.colors.border};
    border-radius: 5px;
    height: 1.3rem;
    text-indent: 0.3rem;
    width: 10rem;
    display: flex;
  }

  svg {
    position: absolute;
    margin-top: 1.85rem;
    color: black;
  }
`;
