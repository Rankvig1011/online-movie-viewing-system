import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Comment() {
    const FAKE_DATA = [
        {
            imgAvatar:
                'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            comment:
                ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet',
            dateMoment: '1/6/2024',
        },
        {
            imgAvatar:
                'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            comment:
                ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet',
            dateMoment: '1/6/2024',
        },
        {
            imgAvatar:
                'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            comment:
                ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean luctus ut est sed faucibus. Duis bibendum ac ex vehicula laoreet',
            dateMoment: '1/6/2024',
        },
    ];
    return (
        <>
            <Box
                sx={{
                    mx: 2,
                    mt: 6,
                }}
            >
                <Typography
                    component="h6"
                    variant="h6"
                    color="inherit"
                    sx={{
                        padding: '10px 20px 10px 20px',
                        textAlign: 'left',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '10px',
                        flexShrink: 0,
                        mt: 4,
                        borderBottom: '2px solid transparent',
                        '&:hover': { borderBottom: '2px solid #f50057' },
                    }}
                >
                    Bình luận
                </Typography>
                <Paper
                    style={{
                        padding: '10px 25px 10px 10px',
                        marginTop: '15px',
                    }}
                >
                    <Box
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        component="form"
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Bình luận của bạn"
                            multiline
                            rows={4}
                            // defaultValue="Default Value"
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <Button variant="outlined">Bình luận</Button>
                        </Box>
                    </Box>
                </Paper>

                <Paper
                    style={{
                        padding: '40px 20px',
                        maxHeight: '650px',
                        overflow: 'hidden',
                        overflowY: 'scroll',
                        marginTop: '15px',
                    }}
                >
                    {FAKE_DATA?.map((item) => {
                        return (
                            <>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp" src={item?.imgAvatar} />
                                    </Grid>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <h4 style={{ margin: 0, textAlign: 'left' }}>
                                            {item?.nameUser}
                                        </h4>
                                        <p style={{ textAlign: 'left' }}>{item?.comment + '.'}</p>
                                        <p style={{ textAlign: 'left', color: 'gray' }}>
                                            {'Thời gian:' +
                                                moment(item?.dateMoment).format('DD/MM/YYYY')}
                                        </p>
                                    </Grid>
                                </Grid>
                                <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
                            </>
                        );
                    })}
                </Paper>
            </Box>
        </>
    );
}

export default Comment;
