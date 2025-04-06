import React from 'react'
import styles from './MainWeather.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WbSunnyIcon from '@mui/icons-material/WbSunny'; 
import AcUnitIcon from '@mui/icons-material/AcUnit'; 
import CloudIcon from '@mui/icons-material/Cloud';
const MainWeather = ({ weatherData }) => {

  const tempCelsius = weatherData?.main?.temp || 'N/A';
  const tempDescription = weatherData?.weather?.[0].description || 'N/A';
  const tempCity = weatherData?.name || 'City not found';
  const tempCountry = weatherData?.sys?.country || 'Country not found';
  const tempTime = weatherData?.dt || null;
  const currentDate = tempTime ? new Date(tempTime * 1000).toLocaleDateString('en-US', {
    weekday: 'long', day: 'numeric', month: 'short'
  }) : "Date not avaliable";

  const getIcon = () => {
    if (tempCelsius > 30) {
      return <WbSunnyIcon sx={{ fontSize: 60 }}  className={styles.icon} style={ {color:'khaki'}} />
    } else if (tempCelsius < 10) {
      return <AcUnitIcon sx={{ fontSize: 60 }} className={styles.icon} style={ {color:'cyan'}} />
    } else {
      return <CloudIcon sx={{ fontSize: 60 }} className={styles.icon} style={ {color:'gray'}} />
    }

  }


  return (
    <div className={styles.container}>
      <div style={{ fontSize: '20px' }}>Now</div>
      <div className={styles.degree}>
        {tempCelsius}°c
        {getIcon()}
      </div>
      <div className={styles.descp}>
        {tempDescription}
      </div>
      <div>
        <div className={styles.icon2}>
          <CalendarMonthIcon/>
          {currentDate}
        </div>
        <div className={styles.icon2}>
          <LocationOnIcon />
          {tempCity}, {tempCountry}
        </div>
      </div>
    </div>
  )
}

export default MainWeather
