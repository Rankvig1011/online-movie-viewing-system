import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import DeleteIcon from '@mui/icons-material/Delete';
function CommentReply(props) {
    const { itemReply, profileLocalParse } = props;
    const handleDeleteComment = () => {};
    return (
        <>
            <Grid
                container
                wrap="nowrap"
                spacing={2}
                maxWidth={'750px'}
                sx={{
                    maxWidth: '90%',
                    marginLeft: '50px',
                    marginTop: '5px',
                }}
            >
                <Grid item sx={4}>
                    <Avatar alt="user" src={itemReply?.user?.avatar} />
                </Grid>
                <Grid item sx={8} justifyContent="left" xs zeroMinWidth>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <h4
                                style={{
                                    margin: 0,
                                    textAlign: 'left',
                                }}
                            >
                                {itemReply?.userReply?.name}
                            </h4>
                            <p
                                style={{
                                    textAlign: 'left',
                                }}
                            >
                                {itemReply?.content + '.'}
                            </p>
                            <p
                                style={{
                                    textAlign: 'left',
                                    color: 'gray',
                                }}
                            >
                                {'Thời gian:' + moment(itemReply?.createdAt).format('DD/MM/YYYY')}
                            </p>
                        </div>
                        {profileLocalParse?._id == itemReply?.userPost?._id && (
                            <>
                                <Tooltip
                                    title="Xóa bình luận"
                                    onClick={() => {
                                        handleDeleteComment(itemReply?._id);
                                    }}
                                    type="submit"
                                >
                                    <IconButton color="primary">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" style={{ margin: '30px 0' }} />
        </>
    );
}

export default CommentReply;
