import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import BoxField from '@/components/Forms/BoxField/BoxField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import CustomTextField from '@/components/Forms/TextField/CustomTextField';
import CustomButton from '@/components/Atom/CustomButton/CustomButton';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/X';
import Logo from '@/assets/images/logo.png';
function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Xem Phim
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const logoStyle = {
    width: '80px',
    height: 'auto',
};
export const Footer = () => {
    return (
        <BoxField
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <CssBaseline />
            <BoxField
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[200]
                            : theme.palette.grey[800],
                }}
            >
                {/*row 1 */}
                <Container maxWidth="xl">
                    <BoxField
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', sm: 'row' },
                            width: '100%',
                            justifyContent: 'space-between',
                        }}
                        //
                    >
                        <BoxField
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                                minWidth: { xs: '100%', sm: '60%' },
                            }}
                        >
                            <BoxField sx={{ width: { xs: '100%', sm: '60%' } }}>
                                <BoxField sx={{ ml: '-10px' }}>
                                    <img src={Logo} style={logoStyle} alt="logo of sitemark" />
                                </BoxField>
                                <Typography variant="body2" color="text.secondary" mb={2}>
                                    Đăng ký nhận bản tin của chúng tôi để cập nhật hàng tuần
                                </Typography>
                                <Stack direction="row" spacing={1} useFlexGap>
                                    <CustomTextField
                                        id="outlined-basic"
                                        hiddenLabel
                                        size="small"
                                        variant="outlined"
                                        fullWidth
                                        aria-label="Enter your email address"
                                        placeholder="Your email address"
                                        inputProps={{
                                            autoComplete: 'off',
                                            'aria-label': 'Enter your email address',
                                        }}
                                    />
                                    <CustomButton
                                        variant="contained"
                                        color="primary"
                                        sx={{ flexShrink: 0 }}
                                    >
                                        Đăng ký
                                    </CustomButton>
                                </Stack>
                            </BoxField>
                        </BoxField>
                        <BoxField
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexDirection: 'row',
                                gap: 1,
                            }}
                        >
                            <Link color="text.secondary" href="#">
                                Trang chủ
                            </Link>
                            <Link color="text.secondary" href="#">
                                Thể loại
                            </Link>
                            <Link color="text.secondary" href="#">
                                Thịnh hành
                            </Link>
                            <Link color="text.secondary" href="#">
                                Thông tin
                            </Link>
                            <Link color="text.secondary" href="#">
                                FAQs
                            </Link>
                        </BoxField>
                    </BoxField>
                </Container>

                {/*row 2 */}
                <Container maxWidth="xl">
                    <BoxField
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            pt: { xs: 4, sm: 8 },
                            mt: 2,
                            width: '100%',
                            borderTop: '1px solid',
                            borderColor: 'divider',
                        }}
                    >
                        <BoxField>
                            {/* <Typography variant="body1">Phim là niềm đam mê</Typography> */}
                            <Copyright />
                        </BoxField>
                        <Stack
                            direction="row"
                            justifyContent="left"
                            spacing={1}
                            useFlexGap
                            sx={{
                                color: 'text.secondary',
                            }}
                        >
                            <IconButton
                                color="inherit"
                                href="https://github.com/mui"
                                aria-label="GitHub"
                                sx={{ alignSelf: 'center' }}
                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://twitter.com/MaterialUI"
                                aria-label="X"
                                sx={{ alignSelf: 'center' }}
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                color="inherit"
                                href="https://www.linkedin.com/company/mui/"
                                aria-label="LinkedIn"
                                sx={{ alignSelf: 'center' }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Stack>
                    </BoxField>
                </Container>
            </BoxField>
        </BoxField>
    );
};
