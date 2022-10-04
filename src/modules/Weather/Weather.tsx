import { useWeather } from '../../dto/hooks';

import { Card, QueryWrapper } from '../../components';
import { WeatherIcon } from './components';

import { WeatherType } from './components/WeatherIcon/WeatherIcon.interface';

import { Content } from './Weather.styles';

const Weather = () => {
  const weatherQuery = useWeather();

  return (
    <Card
      title={`Ожидаемая погода - ${weatherQuery?.data?.description || ''}`}
      css="grid-area: weather">
      <QueryWrapper status={weatherQuery.status}>
        <Content>
          <WeatherIcon type={weatherQuery?.data?.type as WeatherType} />
        </Content>
      </QueryWrapper>
    </Card>
  );
};

export default Weather;
