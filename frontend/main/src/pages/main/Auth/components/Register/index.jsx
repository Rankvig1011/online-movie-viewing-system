import Image from '@/assets/images/bg.png';
import CustomButton from '@/components/Atom/CustomButton/CustomButton';
import GridMui from '@/components/Atom/Grid/GridMui';
import ThemeProviderTheme from '@/components/Atom/ThemeProvider/ThemeProviderTheme';
import BoxField from '@/components/Forms/BoxField/BoxField';
import CustomTextField from '@/components/Forms/TextField/CustomTextField';
import { Typography } from '@/components/Typhograpy';
import { emailValidators, nameValidator } from '@/utils/regex';
import Logo from '@/assets/images/logo.png';
import { CssBaseline } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import GoogleIcon from '@mui/icons-material/Google';
// import TextField from '@mui/material/TextField';
export const Register = () => {
    const logoStyle = {
        width: '80px',
        // height: 'auto',
    };
    const formValid = useRef({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
    });
    // const history = useHistory();
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate('/auth/login');
    };
    const handleSubmitCreateAccount = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            confirmPassword: data.get('confirmPassword'),
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
                        //square
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
                                Đăng ký
                            </Typography>
                            <BoxField
                                component="form"
                                noValidate
                                onSubmit={handleSubmitCreateAccount}
                                sx={{ mt: 1 }}
                            >
                                <CustomTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="name"
                                    label="Tên đăng nhập"
                                    name="name"
                                    validator={nameValidator}
                                    autoComplete="name"
                                    onChange={(isValid) => (formValid.current.name = isValid)}
                                    autoFocus
                                />
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
                                <GridMui container spacing={2}>
                                    <GridMui item xs={6}>
                                        <CustomTextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Mật khẩu"
                                            type="password"
                                            id="password"
                                            onChange={(isValid) =>
                                                (formValid.current.password = isValid)
                                            }
                                            autoComplete="current-password"
                                        />
                                    </GridMui>
                                    <GridMui item xs={6}>
                                        <CustomTextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="confirmPassword"
                                            label="Xác nhận Mật khẩu"
                                            type="password"
                                            id="confirmPassword"
                                            onChange={(isValid) =>
                                                (formValid.current.confirmPassword = isValid)
                                            }
                                            autoComplete="current-password"
                                        />
                                    </GridMui>
                                </GridMui>

                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 1, mb: 1 }}
                                >
                                    Tạo tài khoản
                                </CustomButton>
                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 1, mb: 1 }}
                                >
                                    Tạo tài khoản với Google <GoogleIcon />
                                </CustomButton>
                                <GridMui container>
                                    <GridMui item>
                                        <Typography variant="body2" color="textSecondary">
                                            <Link variant="body2" onClick={handleClickLogin}>
                                                {'Đăng nhập ngay bây giờ'}
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
