import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  row-gap: 20px;
  padding: 10px 100px;

  .pokemon_not_found {
    font-size: 24px;
    width: 100%;
    text-align: center;
    grid-column: 1 / 8;
    color: ${props => props.theme.colors.text};
  }
`;

export const Content = styled.div`
  list-style: none;
  .img__thumbnail {
    width: 120px;
    height: 120px;
  }
`;

export const ContentAnimated = styled(motion.div)`
  list-style: none;
  .img__thumbnail {
    width: 120px;
    height: 120px;
  }
`;

export const FilterAndSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 0 120px;
  justify-content: space-around;
`;
