import styled from 'styled-components';
import { Layout } from "antd"
import { Skeleton } from "antd"

export const Container = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 9px 19px -9px #d9d9d9;
  padding: 20px 25px;
`

export const CityLoader = styled(Skeleton.Input).attrs(props => ({
    active: true
}))`
  display: flex;
  align-items: center;
`

export const City = styled.div`
  display: flex;
  align-items: center;
  gap: 0 5px;
  font-size: 16px;
  max-height: 100%;
  height: 100%;
`