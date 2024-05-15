import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Routes } from './router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export const App = () => {
    return (
        <BrowserRouter>
            <React.StrictMode>
                <QueryClientProvider client={queryClient}>
                    <Routes />
                </QueryClientProvider>
            </React.StrictMode>
        </BrowserRouter>
    );
};
