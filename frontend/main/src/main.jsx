import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './index.css';
import { Provider } from 'jotai';
import { GlobalStyles } from './Provider/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider>
        <GlobalStyles>
            <ToastContainer />
            <App />
        </GlobalStyles>
    </Provider>
);
