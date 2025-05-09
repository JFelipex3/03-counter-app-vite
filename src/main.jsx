import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
// importar styles global para toda la app
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp title="Hola, soy Goku" subTitle="Subtitulo enviado desde padre" />
    </React.StrictMode>
);