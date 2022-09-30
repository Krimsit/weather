import { axios } from "../../core"

import { RequestProps, WeatherDetail } from "../types/Weather"

const api = {
    getWeather: ({ lat, lon }: RequestProps): Promise<WeatherDetail> => axios.get(`/data/2.5/weather?lat=${lat}&lon=${lon}`).then(res => {
        const data = res.data

        return {
            type: data.weather[0].main,
            description: data.weather[0].description,
            temp: {
                current: Math.round(data.main.temp),
                min: Math.round(data.main.temp_min),
                max: Math.round(data.main.temp_max)
            }
        }
    })
}

export default api