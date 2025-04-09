import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';


export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");  
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "8228802c2fc2bac108e6aaf0c849a393";

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let forecastRes = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
            let forecastData = await forecastRes.json();
            
            console.log(jsonResponse); 
            console.log(forecastData);
            let result = {
                city: city,
                temp : jsonResponse.main.temp,
                // tempMin: jsonResponse.main.temp_min,
                // tempMax: jsonResponse.main.temp_max,  
                humidity: jsonResponse.main.humidity,
                // feelsLike: jsonResponse.main.feels_like,
                // weather: jsonResponse.weather[0].description,
                icon: jsonResponse.weather[0].icon,
                description: jsonResponse.weather[0].description,
                forecast: forecastData.list,
                speed: jsonResponse.wind.speed
            };
            console.log(result);
            return result;
        }
        catch(err){
            throw err;
        }        
    };
    
    let handleChange = (event ) => {
         setCity(event.target.value);
    };
    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setError(false);
            setLoading(true);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
            setCity("");
        }
    };
    return (
        <div className='SearchBox'> 
            {/* <h3>Search</h3> */}
            <form onSubmit={handleSubmit }>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br></br>
            <br></br>
            <Button variant="contained" type="submit">Search</Button>
            {loading && <div style={{ marginTop: "10px" }}><CircularProgress /></div>}
            {error && <p style={{ color: "red" }}>No such place exist</p>}

            </form>  
        </div>

    )
}