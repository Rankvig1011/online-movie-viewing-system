import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export const ModalCustom = ({ children, title, opened = false, onClose = () => {} }) => {
    return (
        <Dialog
            open={opened}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            onClose={onClose}
            maxWidth="lg"
        >
            {title && <DialogTitle tw="border-b">{title}</DialogTitle>}
            <DialogContent tw="bg-white ">{children}</DialogContent>
        </Dialog>
    );
};
