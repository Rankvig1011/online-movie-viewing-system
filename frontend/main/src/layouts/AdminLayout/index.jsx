import React from 'react';

import { Outlet } from 'react-router-dom';
import { Container, Scrollable } from '@/components/layout';
import { Header, SideBar } from './components';
import { Drawer } from '@mui/material';
import { useMobileScreen } from '@/hooks/views';

export const AdminLayout = () => {
    const isMobileScreen = useMobileScreen();
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => setOpen(newOpen);
    return (
        <Container tw="h-screen">
            {isMobileScreen ? (
                <Drawer open={open} onClose={() => toggleDrawer(false)}>
                    <Container tw="w-[250px] bg-primary h-full">
                        <SideBar />
                    </Container>
                </Drawer>
            ) : (
                <Container tw="w-[250px] bg-primary">
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
