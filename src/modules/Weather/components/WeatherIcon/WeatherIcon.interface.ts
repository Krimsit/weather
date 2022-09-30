export type WeatherType = "Clear" | "Clouds" | "Rain" | "Thunderstorm" | "Snow"

export type IconsProps = {
    [key in WeatherType]: any
}

export interface WeatherIconProps {
    type: WeatherType
}