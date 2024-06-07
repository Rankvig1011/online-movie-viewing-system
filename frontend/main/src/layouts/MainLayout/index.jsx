import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Header } from './components/Header';
import { Navigate } from 'react-router-dom';
const defaultTheme = createTheme();
export const MainLayout = () => {
    const token = localStorage.getItem('access_token');
    if (!token) {
        const role = localStorage.getItem('role');
        if (role === 'admin') {
            return <Navigate to="/admin/dashboard" />;
        }
        return <Navigate to="/auth/login" />;
    }
    return (
        <ThemeProvider theme={defaultTheme}>
            <Header />
            <Outlet />
            <Footer />
        </ThemeProvider>
    );
};
