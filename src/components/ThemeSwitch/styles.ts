import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(45px);
  }
`;

const slideLeft = keyframes`
  from {
    transform: translateX(45px);
  }
  to {
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  padding: 5px;
  border-radius: 30px;
`;

export const Switch = styled.button`
  align-items: center;
  border: 0;
  width: 80px;
  height: 30px;
  padding: 4px;
  background-color: #444;
  display: flex;
  border-radius: 20px;

  svg {
    &:first-child {
      margin-left: 2px;
    }
    &:last-child {
      margin-right: 22px;
    }
  }
`;

export const SwitchBtn = styled.span`
  position: absolute;
  width: calc(30px - (4px * 2));
  height: calc(30px - (4px * 2));
  border-radius: 50%;
  background-color: white;
  padding: 13px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 2s;
  animation: ${slideLeft} 0.5s ease-in-out;

  &.switch_checked {
    animation: ${slideRight} 0.5s ease-in-out;
    transform: translateX(45px);
  }
`;
