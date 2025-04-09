import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({info}) {
    // const INIT_URL 
    // let weatherInfo = {
    //     city: "Delhi",
    //     feelsLike: 24.84,
    //     temp:25.05,
    //     tempMin: 25.05,
    //     tempMax: 25.05,
    //     humidity: 47,
    //     weather : "haze"
    // }

    const iconUrl = `https://openweathermap.org/img/wn/${info.icon}@2x.png`;    

    let HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let COLD_URL = "https://unsplash.com/photos/a-snow-covered-road-in-the-middle-of-a-forest-ZG2faW8rxDk";
    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";


    return(
        <div className="InfoBox">
            {/* <h1>Weather - {weatherInfo.weather}</h1> */}
            <div className='card'>
            <Card sx={{ width:405 }}>
      <CardMedia
        
        sx={{ height: 140, objectFit: 'contain', padding: 1 }}
        image={info.humidity > 80 ? RAIN_URL: info.temp > 15? HOT_URL : COLD_URL}
        title="green iguama"
      />
      <CardContent sx={{ backgroundColor: '#ebebeb' }}>
        <Typography gutterBottom variant="h5" component="div">
        <img src={iconUrl} alt="weather icon" width="40" height="40"/>
          {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary'}} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}%</p>
          <p>Wind Speed: {info.speed}</p>
          <p>Current Condition: {info.description.charAt(0).toUpperCase() + info.description.slice(1)}</p>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}