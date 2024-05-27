import React, { useEffect, useState } from 'react';
import { RegisterForm } from './RegisterForm';
import Loading from '@/components/Loading';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '@/hooks/register';
import { useProfile } from '@/hooks/profile';
export const Register = () => {
    const [loading, setLoading] = useState(false);
    const { dataRegister, register, isPending: isCreatPending } = useRegister();
    const { dataProfile, profile } = useProfile();
    const navigate = useNavigate();
    useEffect(() => {
        if (dataRegister?.access_token) {
            console.log(dataRegister.access_token);
            localStorage.setItem('access_token', dataRegister.access_token);
            console.log('dataLogin?.access_token:', dataRegister?.access_token);
            profile(dataRegister?.access_token);
        }
    }, [dataRegister, profile]);
    useEffect(() => {
        if (dataProfile?.role === 'admin') {
            localStorage.setItem('role', 'admin');
            localStorage.setItem('profile', JSON.stringify(dataProfile));
            navigate('/admin');
        } else if (dataProfile?.role === 'user') {
            localStorage.setItem('role', 'user');
            localStorage.setItem('profile', JSON.stringify(dataProfile));
            navigate('/');
        }
    }, [dataProfile, navigate]);
    const useHandleSubmit = async (dataPayload) => {
        setLoading(true);
        console.log(dataPayload);
        register(dataPayload);
        setLoading(false);
    };
    return (
        <>
            {loading && <Loading />}
            <RegisterForm onSubmitRegister={useHandleSubmit} isPending={isCreatPending} />
        </>
    );
};
