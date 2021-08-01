import styled, { keyframes } from 'styled-components';

export const AppWrapper = styled.div`
  width: 500px;
  margin: 1em auto;
  text-align: center;
  h1 {
    font-weight: bold;
  }
  & div {
    margin-top: 1rem;
    & span {
      font-weight: bold;
    }
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform : rotate(360deg); }
`;

export const RotatingLogo = styled.img`
  max-width: 150px;
  animation: ${rotate} 4s linear infinite;
`;
