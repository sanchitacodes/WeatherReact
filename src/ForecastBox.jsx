import "./ForecastBox.css";

export default function ForecastBox({ forecast }) {
    const dailyForecasts = forecast.filter((_, index) => index % 8 === 0).slice(0, 5);

    return (
        <div className="forecast-box">
            <h3>5-Day Forecast</h3>
            <div className="forecast-container">
                {dailyForecasts.map((item, index) => {
                    const date = new Date(item.dt_txt).toLocaleDateString();
                    const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;

                    return (
                        <div className="forecast-card" key={index}>
                            <p><strong>{date}</strong></p>
                            <img src={iconUrl} alt="icon" width="50" />
                            <p>{item.weather[0].main}</p>
                            <p>{item.main.temp}&deg;C</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
