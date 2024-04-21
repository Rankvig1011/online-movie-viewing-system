import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router';

export const App = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <Routes />
            </React.StrictMode>
        </BrowserRouter>
    );
};
