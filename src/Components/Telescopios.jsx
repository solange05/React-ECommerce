import React from 'react';
import { Outlet } from 'react-router-dom';
import TelescopiosNavBar from './TelescopiosNavBar';

const Telescopios = () => {
  return (
    <div className="telescopios-container">
      <h1>Telescopios</h1>
      <p>Explora nuestra selección de telescopios y accesorios para la observación astronómica.</p>

      <TelescopiosNavBar />

      <Outlet />
    </div>
  );
};

export default Telescopios;