import { proxy } from "valtio";

type WeatherProps = {
  city: string;
  wind: string;
  visibility: string
  feelsLike: string
  humidity: string
  description: string
  sunrise: number
  sunset: number
  temp: string
  pressure: number
};

const createDefaultWeatherState = (): WeatherProps => ({
  city: "Lagos, Nigeria",
  wind: "",
  visibility: "",
  feelsLike: "",
  humidity: "",
  description: "",
  sunrise: 0,
  sunset: 0,
  temp: "",
  pressure: 0
});

export const weatherState = proxy<WeatherProps>(
  createDefaultWeatherState()
);


export const apiKey = "a519b68c58502c86145fdcaee7eb80e2";
