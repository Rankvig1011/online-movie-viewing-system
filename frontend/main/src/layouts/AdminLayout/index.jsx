import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, Scrollable } from '@/components/layout';
import { Header, SideBar } from './components';
import { Drawer } from '@mui/material';
import { useMobileScreen } from '@/hooks/views';
import { Navigate } from 'react-router-dom';
export const AdminLayout = () => {
    const isMobileScreen = useMobileScreen();
    const [open, setOpen] = React.useState(false);
    const token = localStorage.getItem('access_token');
    const toggleDrawer = (newOpen) => setOpen(newOpen);
    if (!token) {
        return <Navigate to="/auth/login" />;
    }
    const role = localStorage.getItem('role');
    if (role === 'user') {
        return <Navigate to="/" />;
    }
    return (
        <Container tw="h-screen">
            {isMobileScreen ? (
                <Drawer open={open} onClose={() => toggleDrawer(false)}>
                    <Container tw="w-[250px] bg-primary h-full">
                        <SideBar />
                    </Container>
                </Drawer>
            ) : (
                <Container tw=" w-[60px] md:w-[250px] bg-primary ">
                    <SideBar />
                </Container>
            )}

            <Container tw="flex-col">
                <Header toggleShowDrawer={() => toggleDrawer(true)} />
                <Scrollable>
                    <Outlet />
                </Scrollable>
            </Container>
        </Container>
    );
};
