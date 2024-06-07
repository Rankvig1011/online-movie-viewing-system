import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloseIcon from '@mui/icons-material/Close';
function CardMedia(props) {
    const { handleClosePlayMovie, isPlayMovie } = props;
    return (
        <>
            <Box
                sx={{
                    padding: '10px 20px 10px 20px',
                    textAlign: 'left',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '10px',
                    flexShrink: 0,
                    borderBottom: '2px solid transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Typography component="h6" variant="h6" color="inherit">
                    {isPlayMovie?.name}
                </Typography>
                <Tooltip title="Đóng">
                    <IconButton
                        type="submit"
                        size="small"
                        color="secondary"
                        onClick={handleClosePlayMovie}
                    >
                        <CloseIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Card container sx={{ my: 1 }}>
                <iframe
                    alt="movie"
                    width={'100%'}
                    height={'550px'}
                    src={'https://www.youtube.com/embed/tgbNymZ7vqY'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {isPlayMovie?.alias}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Tooltip title="Tập trước">
                        <IconButton type="submit" size="large" color="secondary">
                            <KeyboardArrowLeftIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Tập tiếp theo">
                        <IconButton type="submit" size="large" color="secondary">
                            <KeyboardArrowRightIcon />
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>
        </>
    );
}

export default CardMedia;
