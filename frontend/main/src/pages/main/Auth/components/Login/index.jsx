import React, { useEffect, useState } from 'react';
import { LoginForm } from './LoginForm';
import { useNavigate } from 'react-router-dom';
import Loading from '@/components/Loading';
import { useLogin, useLoginWithGoogle } from '@/hooks/login';
import { useProfile } from '@/hooks/profile';
import { loginWithGoogle } from '@/service/authLogin';
export const Login = () => {
    const [loading, setLoading] = useState(false);
    const { dataLogin, login, isPending: isCreatPending } = useLogin();
    const { dataLoginWithGoogle, loginWithGoogleFromBackEnd, isPending } = useLoginWithGoogle();
    const { dataProfile, profile } = useProfile();
    const navigate = useNavigate();
    useEffect(() => {
        if (dataLogin?.access_token) {
            const token = dataLogin?.access_token;
            localStorage.setItem('access_token', token);
            profile(token);
        }
    }, [dataLogin, profile]);

    useEffect(() => {
        if (dataLoginWithGoogle?.access_token) {
            const token = dataLoginWithGoogle.access_token;
            localStorage.setItem('access_token', token);
            profile(token);
        }
    }, [profile, dataLoginWithGoogle]);
    useEffect(() => {
        if (dataProfile?.role === 'admin') {
            localStorage.setItem('role', 'admin');
            localStorage.setItem('profile', JSON.stringify(dataProfile));
            navigate('/admin/dashboard');
        } else if (dataProfile?.role === 'user') {
            localStorage.setItem('role', 'user');
            localStorage.setItem('profile', JSON.stringify(dataProfile));
            navigate('/');
        }
    }, [dataProfile, navigate]);
    const useHandleSubmit = async (dataPayload) => {
        setLoading(true);
        login(dataPayload);
        setLoading(false);
    };
    // eslint-disable-next-line no-unused-vars
    const handleSubmitGoogle = async () => {
        setLoading(true);
        const { user } = await loginWithGoogle();
        const data = {
            email: user.email || '',
            name: user.displayName || '',
            avatar: user.photoURL || '',
            id: user.uid || '',
        };
        loginWithGoogleFromBackEnd(data);
        setLoading(false);
    };

    return (
        <>
            {loading && <Loading />}
            <LoginForm
                onSubmitLogin={useHandleSubmit}
                isPending={isCreatPending || isPending}
                handleSubmitGoogle={handleSubmitGoogle}
            />
        </>
    );
};
