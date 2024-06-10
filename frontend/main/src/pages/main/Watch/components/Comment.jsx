import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import moment from 'moment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CloseIcon from '@mui/icons-material/Close';
import Reply from './Reply';
import CommentReply from './CommentReply';
import DeleteIcon from '@mui/icons-material/Delete';
function Comment() {
    const FAKE_DATA = [
        {
            avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            _id: '666564304e7903f2eee8cb21',
            content: 'Comment tesst 1',
            user: '661a0991d737acbc38a53ee0',
            movie: '6636fd391dc6ff44fcbf8316',
            status: true,
            reply: [
                {
                    avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
                    nameUser: 'Quý Ice',
                    userPost: '661a0991d737acbc38a53ee0',
                    userReply: '6654a6c942f591279c572b96',
                    content: 'reply comment tesst 1',
                    createdAt: '2024-06-09T08:04:29.385Z',
                    updatedAt: '2024-06-09T08:04:29.385Z',
                    _id: '666564304e7903f2eee8cb26',
                },
                {
                    avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
                    nameUser: 'Quý Ice',
                    userPost: '661a0991d737acbc38a53ee0',
                    userReply: '6654a6c942f591279c572b96',
                    content: 'reply comment tesst 1',
                    createdAt: '2024-06-09T08:04:29.385Z',
                    updatedAt: '2024-06-09T08:04:29.385Z',
                    _id: '661a0991d737acbc38a53ee0',
                },
                {
                    avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
                    nameUser: 'Quý Ice',
                    userPost: '661a0991d737acbc38a53ee0',
                    userReply: '6654a6c942f591279c572b96',
                    content: 'reply comment tesst 1',
                    createdAt: '2024-06-09T08:04:29.385Z',
                    updatedAt: '2024-06-09T08:04:29.385Z',
                    _id: '666564304e7903f2eee8cb26',
                },
            ],
            createdAt: '2024-06-09T08:13:36.972Z',
            updatedAt: '2024-06-09T08:13:36.972Z',
            __v: 0,
        },
        {
            avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            _id: '666564304e7903f2eee8cb23',
            content: 'Comment tesst 1',
            user: '661a0991d737acbc38a53ee0',
            movie: '6636fd391dc6ff44fcbf8316',
            status: true,
            reply: [
                {
                    avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
                    nameUser: 'Quý Ice',
                    userPost: '661a0991d737acbc38a53ee0',
                    userReply: '6654a6c942f591279c572b96',
                    content: 'reply comment tesst 1',
                    createdAt: '2024-06-09T08:04:29.385Z',
                    updatedAt: '2024-06-09T08:04:29.385Z',
                    _id: '666564304e7903f2eee8cb26',
                },
                {
                    avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
                    nameUser: 'Quý Ice',
                    userPost: '661a0991d737acbc38a53ee0',
                    userReply: '6654a6c942f591279c572b96',
                    content: 'reply comment tesst 1',
                    createdAt: '2024-06-09T08:04:29.385Z',
                    updatedAt: '2024-06-09T08:04:29.385Z',
                    _id: '666564304e7903f2eee8cb26',
                },
            ],
            createdAt: '2024-06-09T08:13:36.972Z',
            updatedAt: '2024-06-09T08:13:36.972Z',
            __v: 0,
        },
        {
            avatar: 'https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-1/369170363_2627650640715914_7638493183067359501_n.jpg?stp=dst-jpg_p200x200&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=e__Dh_5-Ct8Q7kNvgFqZPh-&_nc_ht=scontent.fhan20-1.fna&oh=00_AYB8TX-sfWEf5w7Qr3NPUOYQNmT2mRU0QOWRi4f4At35Nw&oe=6668E2A3',
            nameUser: 'Quý Ice',
            _id: '661a0991d737acbc38a53ee0',
            content: 'Comment tesst 1',
            user: '661a0991d737acbc38a53ee0',
            movie: '6636fd391dc6ff44fcbf8316',
            status: true,
            reply: [],
            createdAt: '2024-06-09T08:13:36.972Z',
            updatedAt: '2024-06-09T08:13:36.972Z',
            __v: 0,
        },
    ];
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const [isOpenReply, setReply] = useState(null);
    const [isOpenComment, seOpenComment] = useState(false);
    const handleOpenReply = (valueId) => {
        setReply(valueId);
    };
    const handleOpenComment = (valueId) => {
        seOpenComment(valueId);
    };
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
                        // maxHeight: '650px',
                        // overflow: 'hidden',
                        // overflowY: 'scroll',
                        marginTop: '15px',
                    }}
                >
                    {FAKE_DATA?.map((item) => {
                        return (
                            <>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp" src={item?.avatar} />
                                    </Grid>
                                    <Grid justifyContent="left" item xs zeroMinWidth>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <div>
                                                <h4 style={{ margin: 0, textAlign: 'left' }}>
                                                    {item?.nameUser}
                                                </h4>
                                                <p style={{ textAlign: 'left' }}>
                                                    {item?.content + '.'}
                                                </p>
                                                <p style={{ textAlign: 'left', color: 'gray' }}>
                                                    {'Thời gian:' +
                                                        moment(item?.createdAt).format(
                                                            'DD/MM/YYYY'
                                                        )}
                                                </p>
                                            </div>
                                            <Box>
                                                <Tooltip title="Trả lời">
                                                    <IconButton
                                                        color="primary"
                                                        onClick={() => {
                                                            handleOpenReply(item._id);
                                                        }}
                                                    >
                                                        <ReplyIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                {item?.reply?.length ? (
                                                    <Tooltip title="Lượt trả lời">
                                                        <IconButton
                                                            color="primary"
                                                            onClick={() => {
                                                                handleOpenComment(item._id);
                                                            }}
                                                        >
                                                            <AddCommentIcon />
                                                        </IconButton>
                                                        {item?.reply?.length}
                                                    </Tooltip>
                                                ) : (
                                                    ''
                                                )}
                                                {profileLocalParse?._id == item._id && (
                                                    <Tooltip title="Xóa bình luận">
                                                        <IconButton color="primary">
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Tooltip>
                                                )}
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                {item._id == isOpenReply && (
                                    <Reply
                                        handleCloseReply={() => {
                                            setReply(null);
                                        }}
                                    ></Reply>
                                )}
                                {item._id == isOpenComment && item?.reply?.length && (
                                    <>
                                        <Paper>
                                            <Tooltip title="Đóng">
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => {
                                                        seOpenComment(false);
                                                    }}
                                                >
                                                    <CloseIcon />
                                                </IconButton>
                                            </Tooltip>
                                            {item?.reply?.map((itemReply) => {
                                                return (
                                                    <>
                                                        <CommentReply
                                                            itemReply={itemReply}
                                                            profileLocalParse={profileLocalParse}
                                                        />
                                                    </>
                                                );
                                            })}
                                        </Paper>
                                    </>
                                )}
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
