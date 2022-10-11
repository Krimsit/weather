import { createElement, FC } from 'react';

import { WiDaySunny, WiCloudy, WiRain, WiDayLightning, WiSnow } from 'react-icons/wi';

import { WeatherIconProps, IconsProps } from './WeatherIcon.interface';

import { Container } from './WeatherIcon.styles';

const icons: IconsProps = {
  Clear: WiDaySunny,
  Clouds: WiCloudy,
  Rain: WiRain,
  Thunderstorm: WiDayLightning,
  Snow: WiSnow
};

const WeatherIcon: FC<WeatherIconProps> = ({ type }) => {
  return (
    <Container>
      {Object.keys(icons).includes(type) &&
        createElement(icons[type], { style: { width: '100%', height: '100%' } })}
    </Container>
  );
};

export default WeatherIcon;
