import { useWeather } from '../../dto/hooks';

import { Card } from "../../components"

import {Title, Content, Current, MinMax, MinMaxItem} from './Temperature.styles';

const Temperature = () => {
    const weatherQuery = useWeather()

    return <Card title={<Title>Температура</Title>} status={weatherQuery.status} css="grid-area: temperature">
        <Content>
            <Current>{weatherQuery?.data?.temp.current} <span>&deg;</span></Current>
            <MinMax>
                <MinMaxItem><span>Мин: </span>{weatherQuery?.data?.temp.min} <span>&deg;</span></MinMaxItem>
                <MinMaxItem><span>Макс: </span>{weatherQuery?.data?.temp.max} <span>&deg;</span></MinMaxItem>
            </MinMax>
        </Content>
    </Card>
}

export default Temperature