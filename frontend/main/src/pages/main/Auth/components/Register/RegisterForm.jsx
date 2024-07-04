import Image from '@/assets/images/bg.png';
import CustomButton from '@/components/Atom/CustomButton/CustomButton';
import GridMui from '@/components/Atom/Grid/GridMui';
import ThemeProviderTheme from '@/components/Atom/ThemeProvider/ThemeProviderTheme';
import BoxField from '@/components/Forms/BoxField/BoxField';
import CustomTextField from '@/components/Forms/TextField/CustomTextField';
import { Typography } from '@/components/Typhograpy';
import { emailValidators } from '@/utils/regex';
import Logo from '@/assets/images/logo.png';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CssBaseline } from '@mui/material';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../index.css';
import Loading from '@/components/Loading';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import { uploadImage } from '@/service/common';
// import TextField from '@mui/material/TextField';
export const RegisterForm = (props) => {
    const { onSubmitRegister } = props;
    const [isImgActor, setImg] = useState(null);
    const [loading, setLoading] = useState(false);
    const logoStyle = {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        // height: 'auto',
    };
    const formValid = useRef({
        name: false,
        email: false,
        password: false,
        confirmPassword: false,
        username: false,
    });
    // const history = useHistory();
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate('/auth/login');
    };
    const handleSubmitCreateAccount = async (event) => {
        setLoading(true);
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let newPayloadRegister = {
            email: data.get('email'),
            name: data.get('name'),
            password: data.get('password'),
            username: data.get('username'),
        };
        if (isImgActor) {
            const dataImage = await uploadImage([isImgActor], 'search');
            newPayloadRegister = {
                ...newPayloadRegister,
                avatar: dataImage?.url,
            };
        }
        onSubmitRegister(newPayloadRegister);
        setLoading(false);
    };
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    return (
        <>
            {loading && <Loading />}
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
                                    {isImgActor ? (
                                        <img
                                            src={URL.createObjectURL(isImgActor)}
                                            alt=""
                                            style={logoStyle}
                                        />
                                    ) : (
                                        <img src={Logo} style={logoStyle} alt="logo of sitemark" />
                                    )}
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
                                    <BoxField
                                        fullWidth
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <CustomButton
                                            component="label"
                                            role={undefined}
                                            variant="contained"
                                            tabIndex={-1}
                                            startIcon={<CloudUploadIcon />}
                                        >
                                            Tải ảnh đại diện
                                            <VisuallyHiddenInput
                                                type="file"
                                                accept="image/png, image/jpeg"
                                                id="imgActor"
                                                name="imgActor"
                                                onChange={(e) => {
                                                    setImg(e.target.files[0]);
                                                }}
                                            />
                                        </CustomButton>
                                    </BoxField>
                                    <GridMui container spacing={2}>
                                        <GridMui item xs={6}>
                                            <CustomTextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="name"
                                                label="Tên tài khoản"
                                                name="name"
                                                // validator={nameValidator}
                                                autoComplete="name"
                                                onChange={(isValid) =>
                                                    (formValid.current.name = isValid)
                                                }
                                                autoFocus
                                            />
                                        </GridMui>
                                        <GridMui item xs={6}>
                                            <CustomTextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="username"
                                                label="Tên đăng nhập"
                                                name="username"
                                                // validator={nameValidator}
                                                autoComplete="username"
                                                onChange={(isValid) =>
                                                    (formValid.current.username = isValid)
                                                }
                                                autoFocus
                                            />
                                        </GridMui>
                                    </GridMui>
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
        </>
    );
};
