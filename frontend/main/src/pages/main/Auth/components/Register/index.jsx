import Image from '@/assets/images/backgroudMovie.jpg';
import AvatarMui from '@/components/Atom/AvatarMui/AvatarMui';
import CustomButton from '@/components/Atom/CustomButton/CustomButton';
import GridMui from '@/components/Atom/Grid/GridMui';
import ThemeProviderTheme from '@/components/Atom/ThemeProvider/ThemeProviderTheme';
import BoxField from '@/components/Forms/BoxField/BoxField';
import CustomTextField from '@/components/Forms/TextField/CustomTextField';
import { Typography } from '@/components/Typhograpy';
import { emailValidators, nameValidator } from '@/utils/regex';
import PersonIcon from '@mui/icons-material/Person';
import { CssBaseline } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
// import TextField from '@mui/material/TextField';

export const Register = () => {
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
                        width: '80%',
                        height: '80%',
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
                            borderRadius: '50px 0px 0px 50px',
                        }}
                    />
                    <GridMui
                        item
                        xs={12}
                        sm={8}
                        md={5}
                        component={Paper}
                        elevation={6}
                        square
                        sx={{
                            borderRadius: '0px 50px 50px 0px',
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
                            <AvatarMui sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <PersonIcon />
                            </AvatarMui>
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
                                <CustomTextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Mật khẩu"
                                    type="password"
                                    id="password"
                                    onChange={(isValid) => (formValid.current.password = isValid)}
                                    autoComplete="current-password"
                                />
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
                                <CustomButton
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Tạo tài khoản
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
