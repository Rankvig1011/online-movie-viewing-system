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
import ReactPlayer from 'react-player';
function CardMedia(props) {
    const { handleClosePlayMovie, isPlayMovie, handleNextEpisode, handlePrevEpisode, lengthMovie } =
        props;
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
                {/* <iframe
                    alt="movie"
                    width={'100%'}
                    height={'550px'}
                    src={'https://www.youtube.com/embed/tgbNymZ7vqY'}
                /> */}
                <Box tw="relative " sx={{ display: 'flex', justifyContent: 'center' }}>
                    <ReactPlayer
                        width={'980px'}
                        height={'550px'}
                        tw="rounded-md [video]:rounded-md"
                        url={`http://localhost:3200/api/v1/streaming/${isPlayMovie?.link}`}
                        controls
                    />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5">
                        {isPlayMovie?.alias}
                    </Typography>
                </CardContent>
                <CardActions>
                    {isPlayMovie?.position != (0 || 1) && (
                        <Tooltip title="Tập trước">
                            <IconButton
                                type="submit"
                                size="large"
                                color="secondary"
                                onClick={handlePrevEpisode}
                            >
                                <KeyboardArrowLeftIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                    {lengthMovie > isPlayMovie?.position && (
                        <Tooltip title="Tập tiếp theo">
                            <IconButton
                                type="submit"
                                size="large"
                                color="secondary"
                                onClick={handleNextEpisode}
                            >
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Tooltip>
                    )}
                </CardActions>
            </Card>
        </>
    );
}

export default CardMedia;
