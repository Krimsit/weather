import {useQuery, UseQueryResult} from 'react-query';

import { useGeoState } from '../../context/GeoManager';
import weatherAPI from '../api/WeatherAPI';

import { WeatherDetail } from '../types/Weather';

export const useWeather = (): UseQueryResult<WeatherDetail> => {
    const geoInfo = useGeoState()

    return useQuery<WeatherDetail>("weather",
        () => weatherAPI.getWeather({lat: geoInfo.lat, lon: geoInfo.lon}),
        {
            enabled: geoInfo.status === "success"
        })
}