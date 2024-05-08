import React from 'react';
import { Container } from '../layout';
import WarningIcon from '@mui/icons-material/Warning';
import { Button, Typography } from '@mui/material';

export const DialogForm = ({
    title = 'Warning',
    content = 'Are you sure you want to delete this item?',
    onConfirm,
    onCancel,
}) => {
    const handleConfirm = () => {
        onConfirm();
        onCancel();
    };
    return (
        <Container tw="flex-col gap-2 p-2">
            <Container tw="gap-2">
                <WarningIcon tw="text-warning" />
                <Typography tw="text-warning">{title}</Typography>
            </Container>
            <Container tw="min-h-[50px]">
                <Typography tw="text-sm">{content}</Typography>
            </Container>
            <Container tw="justify-end gap-2">
                <Button variant="contained" color="error" onClick={handleConfirm}>
                    Delete
                </Button>
                <Button variant="contained" color="primary" onClick={onCancel}>
                    Cancel
                </Button>
            </Container>
        </Container>
    );
};
