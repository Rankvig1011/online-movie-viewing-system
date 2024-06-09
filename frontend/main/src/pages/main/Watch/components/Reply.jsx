import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Reply(props) {
    const { handleCloseReply } = props;
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
                        <Button variant="outlined" sx={{ mr: 1 }}>
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
