import React, { useState } from 'react'
import styles from './Navbar.module.css'
import AirSharpIcon from '@mui/icons-material/AirSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const Navbar = ({ searching }) => {
    const [searchCity, setsearchCity] = useState('');
    const handleClick = () => {
        if (searchCity.trim()) {
            searching(searchCity);
        }
    };
  return (
      <nav className={styles.main}>
          <div className={styles.logo}>
              <AirSharpIcon />
              <h2>Weather App</h2>
          </div>
          <div className={styles.searchBar}>
              <input
                  type='text' id='searchTxt' placeholder='Search By City'
                  value={searchCity}
                  onChange={(e) => setsearchCity(e.target.value)}
                  />
              <button onClick={handleClick}><SearchSharpIcon/></button>
          </div>
      </nav>
          
  )
}

export default Navbar
