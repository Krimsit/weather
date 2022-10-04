import styled from 'styled-components';

export const Container = styled.div`
  grid-area: time;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
`;

export const Time = styled.p`
  margin: 0;
  font-size: 45px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px 0;

  svg {
    font-size: 50px;
  }
`;

export const Date = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0 10px;
  font-size: 16px;
  font-weight: 400;

  svg {
    font-size: 24px;
  }
`;
