import React from 'react';
import { Container } from '@/components/layout';
import { CollapseList } from '@/components/CollapseList';
import MovieIcon from '@mui/icons-material/Movie';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryIcon from '@mui/icons-material/Category';

export const SideBar = () => {
    const navItems = [
        {
            icon: <DashboardIcon />,
            label: 'Dashboard',
            to: '/admin/dashboard',
        },
        {
            icon: <CategoryIcon />,
            label: 'Category',
            to: '/admin/category',
        },
        {
            icon: <MovieIcon />,
            label: 'Movies',
            to: '/admin/movies',
        },
    ];
    return (
        <Container tw="flex-col text-white">
            {navItems.map((item, index) => (
                <CollapseList key={index} {...item} />
            ))}
        </Container>
    );
};
