import styled from 'styled-components';

import { PointStylePros } from './Status.interface';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0 5px;
`;

export const Pointer = styled.div<PointStylePros>`
  width: 13px;
  height: 13px;
  border-radius: 100%;
  background-color: ${({ isOnline }) => (isOnline ? '#78BC61' : '#FE5F55')};
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 100%;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;
