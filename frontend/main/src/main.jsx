import React from 'react';

import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { Provider } from 'jotai';
import { GlobalStyles } from './Provider/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </Provider>
);
