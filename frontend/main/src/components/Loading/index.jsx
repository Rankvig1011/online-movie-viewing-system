import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                minHeight: '100vh',
                alignItems: 'center',
            }}
        >
            <CircularProgress size={100} />
        </Box>
    );
}
