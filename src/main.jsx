import React from 'react';
import ReactDOM from 'react-dom/client';

// import { HelloWorldApp } from './HelloWorldApp';
import { FirstApp } from './FirstApp';
// importar styles global para toda la app
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        <FirstApp />
    </React.StrictMode>
);