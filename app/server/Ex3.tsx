import axios from "axios";

async function getData() {
    const res = await axios.get("https://api.open-meteo.com/v1/forecast", {
        params: {
            latitude: 35.6895,
            longitude: 139.6917,
            current_weather: true,
        },
    });
    return res.data.current_weather;
}

export default async function Page() {
    const data = await getData();
    return (
        <div>
            <p>Temperature: {data.temperature}°C</p>
            <p>Weather: {data.weathercode}</p>
            <p>Wind Speed: {data.windspeed} km/h</p>
        </div>
    );
}
