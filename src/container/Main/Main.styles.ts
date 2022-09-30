import { Layout } from 'antd';
import styled from 'styled-components';

export const Container = styled(Layout.Content)`
    padding: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    @media screen and (max-width: 768px) {
      padding: 40px 20px;
      align-items: flex-start;
    }
`