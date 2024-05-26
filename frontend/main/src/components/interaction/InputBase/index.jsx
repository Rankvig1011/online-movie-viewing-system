import React from 'react';
import { Container } from '@/components/layout';
import { Typography } from '@/components/Typhograpy';

export const InputBase = React.forwardRef(
    ({ label, placeholder, error, multiline, ...props }, ref) => {
        return (
            <Container tw="flex-col">
                {label && <Typography tw="text-sm">{label}</Typography>}
                {multiline ? (
                    <textarea placeholder={placeholder} tw="border mb-2 p-2" {...props} ref={ref} />
                ) : (
                    <input placeholder={placeholder} tw="border mb-2 p-2" {...props} ref={ref} />
                )}
                {error && <Typography tw="text-danger !text-xs">{error}</Typography>}
            </Container>
        );
    }
);
InputBase.displayName = 'InputBase';
