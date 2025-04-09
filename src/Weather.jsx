// import { useState } from "react";
// import InfoBox from "./InfoBox";
// import SearchBox from "./SearchBox";

// export default function Weather() {
//     const [weatherInfo, setWeatherInfo] = useState({
//         city: "Delhi",
//         feelsLike: 24.84,
//         temp:25.05,
//         tempMin: 25.05,
//         tempMax: 25.05,
//         humidity: 47,
//         weather : "haze"
//     });

//     let updateInfo = (newInfo) => {
//         setWeatherInfo(newInfo);
//     }
//     return(
//         <div style={{textAlign: "center"}}>
//             <h2>Weather App by default</h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     );
// }

import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import ForecastBox from "./ForecastBox";

export default function Weather() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
    // feelsLike: 24.84,
    temp: 25.05,
    // tempMin: 25.05,
    // tempMax: 25.05,
    humidity: 47,
    // weather: "Haze",
    description: "haze",     
    icon: "50d",
    speed: 30 
    });

    const [history, setHistory] = useState([]);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
        setHistory((prevHistory) => {
            let updated = [newInfo.city, ...prevHistory.filter(c => c !== newInfo.city)];
            return updated.slice(0, 5);
        });
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo}/>
            {weatherInfo.forecast && <ForecastBox forecast={weatherInfo.forecast}/>}

            {/* {history.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Recent Searches:</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {history.map((city, index) => (
                            <li key={index}>{city}</li>
                        ))}
                    </ul>
                </div>
            )} */}

{history.length > 0 && (
  <div style={{ marginTop: "20px" }}>
    <h3>Recent Searches:</h3>
    <ul style={{
      listStyle: "none",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "10px"
    }}>
      {history.map((city, index) => (
        <li
          key={index}
          style={{
            backgroundColor: "#e0e0e0",  
            padding: "8px 16px",
            borderRadius: "20px",
            fontWeight: "500",
            color: "#333"
          }}
        >
          {city}
        </li>
      ))}
    </ul>
  </div>
)}

        </div>
    );
}


