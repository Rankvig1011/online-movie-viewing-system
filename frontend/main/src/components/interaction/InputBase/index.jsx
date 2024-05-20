import { Container } from '@/components/layout';
import { Typography } from '@/components/Typhograpy';
import React from 'react';

export const InputBase = ({ label, placeholder, error, ...props }) => {
    return (
        <Container tw="flex-col">
            {label && <Typography tw="text-sm">{label}</Typography>}
            <input placeholder={placeholder} tw="border mb-5 p-2" {...props} />
            {error && <Typography tw="text-danger text-sm">{error}</Typography>}
        </Container>
    );
};
