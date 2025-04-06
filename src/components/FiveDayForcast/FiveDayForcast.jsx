import React from 'react';
import styles from './FiveDayForcast.module.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CloudIcon from '@mui/icons-material/Cloud';

const FiveDayForcast = ({ fiveDayForecast }) => {
  if (!fiveDayForecast || !fiveDayForecast.list) {
    return <div>Loading...</div>; 
  }

  const dayDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error('Invalid date string:', dateString);
      return 'Invalid Date';
    }
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
    }).format(date);
  };

  const getIcon = (temp) => {
    if (temp > 30) {
      return <WbSunnyIcon sx={{ fontSize: 60 }} className={styles.icon} style={{ color: 'khaki' }} />;
    } else if (temp < 10) {
      return <AcUnitIcon sx={{ fontSize: 60 }} className={styles.icon} style={{ color: 'cyan' }} />;
    } else {
      return <CloudIcon sx={{ fontSize: 60 }} className={styles.icon} style={{ color: 'gray' }} />;
    }
  };

  return (
    <div className={styles.container}>
      {fiveDayForecast.list.map((item, index) => {
        const temp = Math.round(item.main.temp);
        return (
          <div className={styles.boxes} key={index}>
            <div style={{ fontSize: "18px" }}>{dayDate(item.dt_txt)}</div>
            <div>{item.weather[0].description}</div>
            <div className={styles.dayForcast}>
              <p>{getIcon(temp)}</p>
              <p style={{ fontSize: "30px" }}>{temp}°c</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDayForcast;