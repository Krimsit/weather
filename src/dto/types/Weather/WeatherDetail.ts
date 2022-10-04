export interface WeatherDetail {
  type: string;
  description: string;
  temp: {
    current: number;
    min: number;
    max: number;
  };
}
