import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '@/assets/images/logo.png';
import Menu from '@mui/material/Menu';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import { Link, useNavigate } from 'react-router-dom';

const logoStyle = {
    width: '80px',
    height: 'auto',
    cursor: 'pointer',
};

export const Header = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const handleClickOpenOption = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClickCloseOption = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({ behavior: 'smooth' });
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };
    const handleClickLogout = () => {
        localStorage.clear();
        handleClickCloseOption();
        navigate('/auth/login');
    };
    // //login
    // const handleClickLogin = () => {
    //     navigate('/auth/login');
    // };
    // //register
    // const handleClickRegister = () => {
    //     navigate('/auth/register');
    // };

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
                // mt: 2,
            }}
        >
            <Container maxWidth="xl">
                <Toolbar
                    variant="regular"
                    sx={(theme) => ({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexShrink: 0,
                        borderRadius: '999px',
                        bgcolor:
                            theme.palette.mode === 'light'
                                ? 'rgba(255, 255, 255, 0.4)'
                                : 'rgba(0, 0, 0, 0.4)',
                        backdropFilter: 'blur(24px)',
                        maxHeight: 40,
                        border: '1px solid',
                        borderColor: 'divider',
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                    })}
                >
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: 'flex',
                            alignItems: 'center',
                            ml: '-18px',
                            px: 0,
                        }}
                    >
                        <img src={Logo} style={logoStyle} alt="logo of sitemark" />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem
                                onClick={() => scrollToSection('Trang chủ')}
                                sx={{ py: '6px', px: '12px' }}
                            >
                                <Link to={`/`}>
                                    <Typography variant="body2" color="text.primary">
                                        Trang chủ
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={() => scrollToSection('Thể loại')}
                                sx={{ py: '6px', px: '12px' }}
                            >
                                <Link to={`/category`}>
                                    <Typography variant="body2" color="text.primary">
                                        Thể loại
                                    </Typography>
                                </Link>
                            </MenuItem>
                            {profileLocalParse?._id && (
                                <MenuItem
                                    onClick={() => scrollToSection('Danh sách phim yêu thích')}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Link to={`/favorites`}>
                                        <Typography variant="body2" color="text.primary">
                                            Phim yêu thích
                                        </Typography>
                                    </Link>
                                </MenuItem>
                            )}
                            {/* <MenuItem
                                onClick={() => scrollToSection('faq')}
                                sx={{ py: '6px', px: '12px' }}
                            >
                                <Typography variant="body2" color="text.primary">
                                    FAQ
                                </Typography>
                            </MenuItem> */}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            gap: 0.5,
                            alignItems: 'center',
                        }}
                    >
                        {/* <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} /> */}
                        <Button
                            color="primary"
                            variant="text"
                            size="small"
                            component="a"
                            target="_blank"
                            onClick={
                                profileLocalParse?.name
                                    ? handleClickOpenOption
                                    : () => navigate('/auth/login')
                            }
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src={profileLocalParse?.avatar || ''}
                                sx={{ mr: 1 }}
                            />
                            {profileLocalParse?.name || 'Đăng nhập'}
                        </Button>
                        <Menu
                            id="fade-menu"
                            MenuListProps={{
                                'aria-labelledby': 'fade-button',
                            }}
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleClickCloseOption}
                            TransitionComponent={Fade}
                        >
                            {/* <MenuItem onClick={handleClickCloseOption}>Thông tin</MenuItem> */}
                            <MenuItem onClick={handleClickLogout}>Đăng xuất</MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { sm: '', md: 'none' } }}>
                        <Button
                            variant="text"
                            color="primary"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ minWidth: '30px', p: '4px' }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{
                                    minWidth: '60dvw',
                                    p: 2,
                                    backgroundColor: 'background.paper',
                                    flexGrow: 1,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                    }}
                                >
                                    {/* <ToggleColorMode
                                mode={mode}
                                toggleColorMode={toggleColorMode}
                            /> */}
                                </Box>
                                <MenuItem onClick={() => scrollToSection('Trang chủ')}>
                                    <Link to={`/`}>Trang chủ</Link>
                                </MenuItem>
                                <MenuItem onClick={() => scrollToSection('Thể loại')}>
                                    <Link to={`/category`}>Thể loại</Link>
                                </MenuItem>
                                <MenuItem
                                    onClick={() => scrollToSection('Danh sách phim yêu thích')}
                                >
                                    <Link to={`/favorites`}>Phim yêu thích</Link>
                                </MenuItem>
                                {/* <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem> */}
                                <Divider />
                                <MenuItem>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        component="a"
                                        sx={{ width: '100%' }}
                                        onClick={handleClickOpenOption}
                                    >
                                        {profileLocalParse?.name}
                                    </Button>
                                </MenuItem>
                                <MenuItem>
                                    <Menu
                                        id="fade-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'fade-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={openMenu}
                                        onClose={handleClickCloseOption}
                                        TransitionComponent={Fade}
                                    >
                                        {/* <MenuItem onClick={handleClickCloseOption}>
                                            Thông tin
                                        </MenuItem> */}
                                        <MenuItem onClick={handleClickLogout}>Đăng xuất</MenuItem>
                                    </Menu>
                                </MenuItem>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

Header.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};
