import React from 'react';
import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div>
            <div>Header</div>
            <div>
                <Outlet />
            </div>
            <div>Footer</div>
        </div>
    );
};
