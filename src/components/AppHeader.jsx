import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faWifi } from '@fortawesome/free-solid-svg-icons'

function AppHeader() {
    // Elements
    const dateDisplay = () => {
        const [formattedDate, setFormattedDate] = useState('');
      
        useEffect(() => {
          const updateDate = () => {
            const now = new Date();
      
            const options = {
              weekday: 'short',
              month: 'short',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              hour12: false,
            };
      
            const localeString = now.toLocaleString('en-US', options);
            setFormattedDate(localeString.replace(',', ''));
          };
      
          updateDate();
      
          const interval = setInterval(updateDate, 60000);
      
          return () => clearInterval(interval);
        }, []);
      
        return formattedDate;
      };

    return (
        <header className="header d-flex justify-between align-center">
            <nav className="d-flex align-center">
                <img className="logo" src="/img/scg-logo-white.png" alt="SCG Logo" />
                <ul className="d-flex">
                    <li className="nav-link"><NavLink to="/">Home</NavLink></li>
                    <li className="nav-link"><NavLink to="/reel">Reel</NavLink></li>
                    <li className="nav-link"><NavLink to="/projects">Projects</NavLink></li>
                    <li className="nav-link"><NavLink to="/about">About</NavLink></li>
                </ul>
            </nav>
            <div className="nav-icons">
                <ul className="d-flex">
                    <li><FontAwesomeIcon icon={faBatteryThreeQuarters} /></li>
                    <li><FontAwesomeIcon icon={faWifi} /></li>
                    <li>{dateDisplay()}</li>
                </ul>
            </div>
        </header>
    )
}

export default AppHeader