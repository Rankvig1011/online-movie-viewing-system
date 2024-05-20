import React from 'react';
import Box from '@mui/material/Box';
const BoxField = (props) => {
    const { sx, ...children } = props;
    return <Box sx={sx} {...children} />;
};

export default BoxField;
