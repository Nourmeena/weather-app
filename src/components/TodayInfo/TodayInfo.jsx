import MainWeather from '../MainWeather/MainWeather'
import styles from './TodayInfo.module.css'
import AirIcon from "@mui/icons-material/Air";
import InvertColorsIcon from "@mui/icons-material/InvertColors";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompressIcon from '@mui/icons-material/Compress';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat'
import React from 'react'

const TodayInfo = ({ weatherData}) => {
    const { main, visibility } = weatherData;
  return (
    <div className={styles.container}>
          <div className={styles.title}>Today's Highlights</div>
          <div className={styles.upperBoxes}>
                <div className={styles.todayTemp}>
                    <MainWeather weatherData={weatherData} />
                </div>
                <div className={styles.airQuality}>
                  <p></p>
                  <div>
                    <AirIcon style={{ fontSize: "35px" }} />
                    <div className={styles.info}>
                            <div>
                              <p>Humidity</p>
                                <InvertColorsIcon sx={{ fontSize: 40 }}  style={ {paddingLeft:5}}/>
                                <p>{main.humidity}</p>
                            </div>
                            <div>
                            <p>Pressure</p>
                                <CompressIcon sx={{ fontSize: 40 }} style={ {paddingLeft:10}} />
                                <p>{main.pressure} hpa</p>
                            </div>
                            <div>
                            <p>Visibility</p>
                                <VisibilityIcon sx={{ fontSize: 40 }}  style={ {paddingLeft:10}}/>
                                <p>{visibility/1000} km</p>
                            </div>
                            <div>
                            <p>Feels</p>
                              <DeviceThermostatIcon sx={{ fontSize: 40 }}  style={ {paddingLeft:10}}/>
                                <p>{main.feels_like}°c</p>
                            </div>
                        
                        </div>
                  </div>
                </div>
          </div>
          
    </div>
  )
}

export default TodayInfo
