import Image from '@/assets/images/bg.png';
import CustomButton from '@/components/Atom/CustomButton/CustomButton';
import GridMui from '@/components/Atom/Grid/GridMui';
import ThemeProviderTheme from '@/components/Atom/ThemeProvider/ThemeProviderTheme';
import BoxField from '@/components/Forms/BoxField/BoxField';
import CheckBoxField from '@/components/Forms/CheckBoxField/CheckBoxField';
import CustomFormControlLabel from '@/components/Forms/FormControlLabel/CustomFormControlLabel';
import CustomTextField from '@/components/Forms/TextField/CustomTextField';
import { Typography } from '@/components/Typhograpy';
import { emailValidators } from '@/utils/regex';
import Logo from '@/assets/images/logo.png';
import { CssBaseline } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
// import TextField from '@mui/material/TextField';
import '../../index.css';
export const Login = () => {
    const logoStyle = {
        width: '80px',
        height: 'auto',
    };
    const formValid = useRef({ password: false, email: false });
    // const history = useHistory();
    const navigate = useNavigate();
    const handleClickRegister = () => {
        navigate('/auth/register');
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    return (
        <ThemeProviderTheme>
            <GridMui container component="main" class={'pagelogin'}>
                <GridMui
                    container
                    sx={{
                        width: '1300px',
                        height: '650px',
                    }}
                >
                    <CssBaseline />
                    <GridMui
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: `url(${Image})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                        component={Paper}
                    />
                    <GridMui
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        <BoxField
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <BoxField sx={{ ml: '-10px' }}>
                                <img src={Logo} style={logoStyle} alt="logo of sitemark" />
                            </BoxField>
                            <Typography component="h1" variant="h5">
                                Đăng nhập
                            </Typography>
                            <BoxField
                                component="form"
                                noValidate
                                onSubmit={handleSubmit}
                                sx={{ mt: 1 }}
                            >
                                <CustomTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Dịa chỉ email"
                                    name="email"
                                    validator={emailValidators}
                                    autoComplete="email"
                                    onChange={(isValid) => (formValid.current.email = isValid)}
                                    autoFocus
                                />
                                <CustomTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mật khẩu"
                                    type="password"
                                    onChange={(isValid) => (formValid.current.password = isValid)}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <CustomFormControlLabel
                                    control={<CheckBoxField value="remember" color="primary" />}
                                    label="Nhớ mật khẩu"
                                />
                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 1, mb: 1 }}
                                >
                                    Đăng nhập
                                </CustomButton>
                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 1, mb: 1 }}
                                >
                                    Đăng nhập với Google <GoogleIcon />
                                </CustomButton>
                                <GridMui container>
                                    <GridMui item xs>
                                        <Typography variant="body2" color="textSecondary">
                                            Quên mật khẩu?
                                        </Typography>
                                    </GridMui>
                                    <GridMui item>
                                        <Typography variant="body2" color="textSecondary">
                                            {'Chưa có tài khoản? '}
                                            <Link variant="body2" onClick={handleClickRegister}>
                                                {'Đăng ký ngay bây giờ'}
                                            </Link>
                                        </Typography>
                                    </GridMui>
                                </GridMui>
                            </BoxField>
                        </BoxField>
                    </GridMui>
                </GridMui>
            </GridMui>
        </ThemeProviderTheme>
    );
};
