import { useWeather } from '../../dto/hooks';

import { Card, QueryWrapper } from '../../components';

import { Content, Current, MinMax, MinMaxItem } from './Temperature.styles';

const Temperature = () => {
  const weatherQuery = useWeather();

  return (
    <Card title="Температура" css="grid-area: temperature">
      <QueryWrapper status={weatherQuery.status}>
        <Content>
          <Current>
            {weatherQuery?.data?.temp.current} <span>&deg;</span>
          </Current>
          <MinMax>
            <MinMaxItem>
              <span>Мин: </span>
              {weatherQuery?.data?.temp.min} <span>&deg;</span>
            </MinMaxItem>
            <MinMaxItem>
              <span>Макс: </span>
              {weatherQuery?.data?.temp.max} <span>&deg;</span>
            </MinMaxItem>
          </MinMax>
        </Content>
      </QueryWrapper>
    </Card>
  );
};

export default Temperature;
