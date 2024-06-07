import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import { useResponsive } from '@/utils/useResponsive';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.css';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
function BoxEpisode(props) {
    const { movieData, handleCloseEpisode, handlePlayMovie } = props;
    const [isImgActor, setImgActor] = useState([]);
    const sliderRef = useRef();
    const { screenType } = useResponsive();
    useEffect(() => {
        if (movieData) {
            setImgActor(movieData);
        }
    }, [movieData]);
    const settings = {
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: screenType === 'MOBILE' ? 2 : 4,
        slidesToScroll: screenType === 'MOBILE' ? 2 : 4,
    };
    return (
        <>
            {isImgActor?.length > 0 ? (
                <Box
                    sx={{
                        mx: 2,
                        mt: 6,
                    }}
                >
                    <Box
                        sx={{
                            padding: '10px 20px 10px 20px',
                            textAlign: 'left',
                            backgroundColor: '#f5f5f5',
                            borderRadius: '10px',
                            flexShrink: 0,
                            mt: 4,
                            borderBottom: '2px solid transparent',
                            '&:hover': { borderBottom: '2px solid #f50057' },
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography component="h6" variant="h6" color="inherit">
                            Tập phim
                        </Typography>
                        <Tooltip title="Đóng">
                            <IconButton
                                type="submit"
                                size="small"
                                color="secondary"
                                onClick={handleCloseEpisode}
                            >
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box className="container-slider">
                        <Container maxWidth="xl" className="slider">
                            {screenType !== 'MOBILE' && (
                                <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                                    <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
                                </div>
                            )}
                            {isImgActor?.length && (
                                <Slider {...settings} ref={sliderRef}>
                                    {isImgActor?.map((item) => (
                                        <>
                                            <Tooltip title={item?.name || 'Xem phim'}>
                                                <Box
                                                    style={{
                                                        position: 'relative',
                                                        width: '100%',
                                                        overflow: 'hidden',
                                                        backgroundSize: 'cover',
                                                        backgroundPosition: 'center',
                                                    }}
                                                    onClick={() => {
                                                        handlePlayMovie(item);
                                                    }}
                                                >
                                                    <img
                                                        src={item?.coverImage}
                                                        style={{
                                                            margin: '10px',
                                                            width: '300px',
                                                            height: '250px',
                                                            objectFit: 'cover',
                                                            verticalAlign: 'bottom',
                                                            borderRadius: '10px',
                                                        }}
                                                        className="bg-image-container"
                                                    />
                                                    <div
                                                        style={{
                                                            position: 'absolute',
                                                            left: '20px',
                                                            bottom: '20px',
                                                            fontSize: '20px',
                                                            color: 'white',
                                                        }}
                                                    >
                                                        {item?.alias}
                                                    </div>
                                                </Box>
                                            </Tooltip>
                                        </>
                                    ))}
                                </Slider>
                            )}
                            {screenType !== 'MOBILE' && (
                                <div onClick={() => sliderRef.current.slickNext()} className="next">
                                    <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
                                </div>
                            )}
                        </Container>
                    </Box>
                </Box>
            ) : (
                ''
            )}
        </>
    );
}

export default BoxEpisode;
