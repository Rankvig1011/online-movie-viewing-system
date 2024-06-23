import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Reply(props) {
    const { handleCloseReply, idMovie, onSubmitReplyComment, itemComment } = props;
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const handleCommentReply = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const mapReplyItem = itemComment?.reply?.map((item) => {
            return {
                userPost: item?.userPost?._id,
                userReply: item?.userReply?._id,
                content: item?.content,
                createdAt: item?.createdAt,
                updatedAt: item?.updatedAt,
            };
        });
        const newArrReply = mapReplyItem?.length ? mapReplyItem : [];
        newArrReply.push({
            userPost: itemComment?.user?._id,
            userReply: profileLocalParse._id,
            content: data.get('commentInfoReply'),
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const newPayloadLogin = {
            _id: itemComment?._id,
            data: {
                user: itemComment?.user?._id,
                content: itemComment?.content,
                movie: idMovie,
                reply: newArrReply,
                updatedAt: new Date(),
            },
        };
        onSubmitReplyComment(newPayloadLogin);
    };
    return (
        <>
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
                    onSubmit={handleCommentReply}
                >
                    <TextField
                        id="outlined-multiline-static"
                        label="Bình luận của bạn"
                        multiline
                        name="commentInfoReply"
                        autoFocus
                        autoComplete="commentInfoReply"
                        rows={4}
                        // defaultValue="Default Value"
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                        }}
                    >
                        <Button variant="outlined" sx={{ mr: 1 }} type="submit">
                            Bình luận
                        </Button>
                        <Button variant="outlined" onClick={handleCloseReply}>
                            Hủy
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </>
    );
}

export default Reply;
