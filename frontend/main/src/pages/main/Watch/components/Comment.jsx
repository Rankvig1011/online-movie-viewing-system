import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
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
import { useCommentDetail, useDeleteComment } from '@/hooks/comments';
function Comment(props) {
    const { idMovie, onSubmitComment, onSubmitReplyComment } = props;
    const { commentData } = useCommentDetail(idMovie);
    const { deleteComment } = useDeleteComment();
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const [isOpenReply, setReply] = useState(null);
    const [isOpenComment, seOpenComment] = useState(false);
    const [isDataComment, setDataComment] = useState(null);
    const handleOpenReply = (valueId) => {
        setReply(valueId);
    };
    const handleDeleteComment = (idComment) => {
        deleteComment(idComment);
    };
    const handleOpenComment = (valueId) => {
        seOpenComment(valueId);
    };
    useEffect(() => {
        console.log('commentData::', commentData);
        if (commentData?.length) {
            setDataComment(commentData);
        }
    }, [commentData]);
    const handleComment = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const newPayloadLogin = {
            movie: idMovie,
            content: data.get('commentInfo'),
            user: profileLocalParse._id,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        onSubmitComment(newPayloadLogin);
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
                        onSubmit={handleComment}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="Bình luận của bạn"
                            multiline
                            name="commentInfo"
                            autoFocus
                            autoComplete="commentInfo"
                            rows={4}
                            // defaultValue="Default Value"
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'end',
                            }}
                        >
                            <Button variant="outlined" type="submit">
                                Bình luận
                            </Button>
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
                    {isDataComment?.map((item) => {
                        return (
                            <>
                                <Grid container wrap="nowrap" spacing={2}>
                                    <Grid item>
                                        <Avatar alt="Remy Sharp" src={item?.user?.avatar} />
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
                                                    {item?.user?.name}
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
                                                {profileLocalParse?._id == item?.user._id && (
                                                    <Tooltip
                                                        title="Xóa bình luận"
                                                        onClick={() => {
                                                            handleDeleteComment(item?._id);
                                                        }}
                                                    >
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
                                        idMovie={idMovie}
                                        onSubmitReplyComment={onSubmitReplyComment}
                                        itemComment={item}
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
                                                            handleDeleteComment={
                                                                handleDeleteComment
                                                            }
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
