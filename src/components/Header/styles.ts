import styled from 'styled-components';

export const Container = styled.header`
  padding: 50px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    width: 250px;
  }

  .github_icon {
    &:hover {
      cursor: pointer;
    }
  }
`;
