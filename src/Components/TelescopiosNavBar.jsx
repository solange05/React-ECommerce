import React from 'react';
import { Link } from 'react-router-dom';

const TelescopiosNavBar = () => {
  return (
    <div className="telescopios-navbar">
      <div className="nav-item">
        <Link to="/telescopios/refractor">
          <button className="nav-button">Refractor</button>
        </Link>
        <img src="/Assets/TiposDeTelescopios/telescopio-refractor.webp" alt="Telescopio Refractor" className="nav-image" />
      </div>
      <div className="nav-item">
        <Link to="/telescopios/reflector">
          <button className="nav-button">Reflector</button>
        </Link>
        <img src="/Assets/TiposDeTelescopios/telescopio-reflector.webp" alt="Telescopio Reflector" className="nav-image" />
      </div>
      <div className="nav-item">
        <Link to="/telescopios/catadioptrico">
          <button className="nav-button">Catadióptrico</button>
        </Link>
        <img src="/Assets/TiposDeTelescopios/telescopio-catadioptrico.webp" alt="Telescopio Catadióptrico" className="nav-image" />
      </div>
    </div>
  );
};

export default TelescopiosNavBar;