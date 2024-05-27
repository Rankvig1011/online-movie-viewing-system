import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import Loading from '@/components/Loading';
import { useLogin } from '@/hooks/auth';
import { useProfile } from '@/hooks/profile';
export const Login = () => {
    const [loading, setLoading] = useState(false);
    const { dataLogin, login, isPending: isCreatPending } = useLogin();
    const { dataProfile, profile } = useProfile();
    const navigate = useNavigate();
    useEffect(() => {
        if (dataLogin?.access_token) {
            console.log(dataLogin.access_token);
            localStorage.setItem('access_token', dataLogin.access_token);
            console.log('dataLogin?.access_token:', dataLogin?.access_token);
            profile(dataLogin?.access_token);
        }
    }, [dataLogin, profile]);
    useEffect(() => {
        if (dataProfile?.role === 'admin') {
            navigate('/admin');
        } else if (dataProfile?.role === 'user') {
            navigate('/');
        }
    }, [dataProfile, navigate]);
    const useHandleSubmit = async (dataPayload) => {
        setLoading(true);
        login(dataPayload);
        setLoading(false);
    };
    return (
        <>
            {loading && <Loading />}
            <LoginForm onSubmitLogin={useHandleSubmit} isPending={isCreatPending} />
        </>
    );
};
