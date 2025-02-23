import React from 'react';
import ReactDOM from 'react-dom/client';  // Importa desde 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
//port HomeLayout from '../components/layout/home-layout/LoginLayout';

//import CssBaseline from '@material-ui/core/CssBaseline';
//import LoginLayout from '../components/layout/login-layout/LoginLayout';



const root = ReactDOM.createRoot(document.getElementById('root')); // Crear el root
root.render(  // Usa 'render' en el root
  <React.StrictMode>
    <CssBaseline />
    <HomeLayout />
  </React.StrictMode>
);
