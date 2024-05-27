import { authApi } from 'api';
import * as React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
    const navigate = useNavigate();
    React.useEffect(() => {
        (async () => {
            try {
                const token = localStorage.getItem('token');
                await authApi.checkToken(token);
            } catch (error) {
                navigate('auth/login');
                console.log(error);
            }
        })();
    }, []);
    if (localStorage.getItem('token') === null) {
        return <Navigate replace to="auth/login" />;
    } else return <Outlet />;
}
