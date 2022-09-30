import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { useWeather } from "../../dto/hooks"

import { Card } from "../../components"
import { WeatherIcon } from "./components"

import { WeatherType } from "./components/WeatherIcon/WeatherIcon.interface"

import { Content } from "./Weather.styles"

const Weather = () => {
    const weatherQuery = useWeather()

    return <Card title={weatherQuery?.data?.description} status={weatherQuery.status} css="grid-area: weather">
        <Content>
            <WeatherIcon type={weatherQuery?.data?.type as WeatherType} />
        </Content>
    </Card>
}

export default Weather