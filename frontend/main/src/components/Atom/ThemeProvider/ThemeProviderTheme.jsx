import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
const ThemeProviderTheme = (props) => {
    const defaultTheme = createTheme();
    const { theme, ...children } = props;
    return <ThemeProvider theme={theme ? theme : defaultTheme} {...children} />;
};

export default ThemeProviderTheme;
