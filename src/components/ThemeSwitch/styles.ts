import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  left: 280px;
  background-color: ${props =>
    props.theme.title === 'dark'
      ? 'rgba(255, 255, 255, 0.4)'
      : 'rgba(0, 0, 0, 0.3)'};
  padding: 5px;
  border-radius: 30px;

  svg {
    margin: 0 5px 0 5px;
    stroke: rgba(255, 255, 255, 0.87);
    &:first-child {
      opacity: ${props => (props.theme.title === 'dark' ? 0.3 : 1)};
    }
    &:last-child {
      opacity: ${props => (props.theme.title === 'light' ? 0.3 : 1)};
    }
  }
`;
