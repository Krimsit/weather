import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px 0;
`;

export const Current = styled.p`
  font-size: 24px;
  margin: 0;

  span {
    font-weight: bold;
  }
`;

export const MinMax = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0 10px;
  font-size: 16px;
`;

export const MinMaxItem = styled.p`
  margin: 0;
  font-size: 16px;

  span {
    font-weight: bold;
  }
`;
