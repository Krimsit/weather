import {useEffect, useState} from 'react';

interface Response {
    status: "success" | "error" | "loading"
    data?: GeolocationPosition,
    error?: string
}

const geoOptions = {
    enableHighAccuracy: true,
    maximumAge: Infinity
}

const useGetCurrentLocation = () => {
    const [location, setLocation] = useState<Response>({ status: "loading" })

    const handleSetResponse = (value: Response) => setLocation(value)

    const getCurrentLocation = () => {
        const geo = navigator.geolocation

        if (!geo) {
            handleSetResponse({ status: "error", error: "Геолокация не поддерживается данным браузером" })
            return
        }

        geo.getCurrentPosition((position: GeolocationPosition) => handleSetResponse({ status: "success", data: position }), ((error: GeolocationPositionError) => {
            let errorMessage = ""

            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = "Пользователь отклонил запрос на геолокацию"
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Информация о местоположении недоступна"
                    break;
                case error.TIMEOUT:
                    errorMessage = "Время ожидания запроса на получение местоположения пользователя истекло"
                    break;
                default:
                    errorMessage = "Произошла неизвестная ошибка"
                    break;
            }

            handleSetResponse({ status: "error", error: errorMessage })
        }), geoOptions)
    }

    useEffect(() => {
        getCurrentLocation()
    }, [])

    return { location, getCurrentLocation }
}

export default useGetCurrentLocation