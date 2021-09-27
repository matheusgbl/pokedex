import styled from 'styled-components';

export const Container = styled.header`
  padding: 50px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 250px;
  }

  .github_icon {
    position: absolute;
    left: 1580px;
    right: 0;

    &:hover {
      cursor: pointer;
    }
  }
`;
