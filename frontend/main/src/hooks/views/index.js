import { useTheme, useMediaQuery } from '@mui/material';

export function useMobileScreen() {
    const theme = useTheme();
    const smallScreen = !useMediaQuery(theme.breakpoints.up('sm'));
    return smallScreen;
}

export function useTabletScreen() {
    const theme = useTheme();
    const tabletScreen = !useMediaQuery(theme.breakpoints.up('md'));
    return tabletScreen;
}

export function useMediumScreen() {
    const theme = useTheme();
    const mediumScreen = !useMediaQuery(theme.breakpoints.up('lg'));
    return mediumScreen;
}
