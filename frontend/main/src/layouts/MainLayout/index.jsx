import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';

const defaultTheme = createTheme();
export const MainLayout = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
};
