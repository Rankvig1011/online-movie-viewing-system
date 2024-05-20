import React from 'react';
import { Grid } from '@mui/material';
const GridMui = (props) => {
    const { container, component, styles, ...children } = props;
    return <Grid container={container} component={component} sx={styles} {...children} />;
};

export default GridMui;
