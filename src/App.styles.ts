import styled, { createGlobalStyle } from 'styled-components';

export const Content = styled.div`
  max-height: 500px;
  display: grid;
  grid-template-areas: 'time time' 'weather temperature';
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-areas: 'time' 'temperature' 'weather';
    gap: 25px;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body,
  html,
  #root {
    height: 100%;
    margin: 0;
    transition: all 0.2s ease;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #F5F5F5;
  }
  
  * {
    outline: none;
  }
`;
