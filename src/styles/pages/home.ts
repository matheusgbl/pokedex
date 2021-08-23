import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 20px;
  padding: 10px 100px;
`;

export const FilterAndSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 120px;
  justify-content: space-around;
`;

export const Content = styled.div`
  .img__thumbnail {
    width: 120px;
    height: 120px;
  }
`;
