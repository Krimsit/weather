import styled from 'styled-components';
import { Card, Result } from 'antd';

export const BaseCard = styled(Card)<{ css?: string }>`
  width: max-content;
  display: flex;
  flex-direction: column;
  min-width: 255px;
  min-height: 200px;
  border-radius: 15px;
  background: #ffffff60;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  .ant-card-head {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 14px;
  }

  .ant-card-body {
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    min-width: 0;
  }

  ${({ css }) => css}
`;

export const Error = styled(Result).attrs(() => ({
  status: 'error'
}))`
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px 0;

  .ant-result-icons,
  .ant-result-content {
    margin: 0;
    padding: 0;
  }
`;
