import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body{
        ${tw`m-0 p-0 text-sm 
        leading-[1.5]`}
    }
`;

export const GlobalStyles = ({ children }) => {
    const themes = createTheme({
        palette: {
            primary: {
                main: '#1a202c',
            },
            secondary: {
                main: '#2d3748',
            },
        },
    });
    return (
        <StyledEngineProvider>
            <ThemeProvider theme={themes}>
                <BaseStyles />
                <CustomStyles />
                {children}
            </ThemeProvider>
        </StyledEngineProvider>
    );
};
