import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Slider from 'react-slick';
import { useResponsive } from '@/utils/useResponsive';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './style.css';
function BoxImgActor(props) {
    const { movieData } = props;
    const [isImgActor, setImgActor] = useState([]);
    const sliderRef = useRef();
    const { screenType } = useResponsive();
    useEffect(() => {
        if (movieData) {
            let newImg = [];
            if (movieData?.actors?.length) {
                movieData?.actors?.map((item) => {
                    if (Array.isArray(item?.image) && item?.image?.length) {
                        const newArr = item?.image?.map((ele) => {
                            if (ele) {
                                return {
                                    srcImg: ele,
                                    name: item?.name,
                                };
                            }
                        });
                        newImg = newImg.concat(newArr);
                    }
                });
                setImgActor(newImg);
            }
        }
    }, [movieData]);
    const settings = {
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: screenType === 'MOBILE' ? 2 : 5,
        slidesToScroll: screenType === 'MOBILE' ? 2 : 5,
    };
    const renderBoxImgActor = (item) => {
        return (
            <>
                <Box
                    style={{
                        position: 'relative',
                        width: '350px',
                        overflow: 'hidden',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <img
                        src={item?.srcImg}
                        style={{
                            margin: '10px',
                            width: '250px',
                            height: '350px',
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
                        {item?.name}
                    </div>
                </Box>
            </>
        );
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
                        Hình ảnh diễn viên
                    </Typography>
                    <div className="container-slider">
                        <Container maxWidth="xl" className="slider">
                            {screenType !== 'MOBILE' && (
                                <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                                    <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
                                </div>
                            )}
                            {movieData?.actors?.length && isImgActor?.length > 4 ? (
                                <Slider {...settings} ref={sliderRef}>
                                    {isImgActor?.map((item) => renderBoxImgActor(item))}
                                </Slider>
                            ) : (
                                isImgActor?.length && (
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        {isImgActor?.map((item) => renderBoxImgActor(item))}
                                    </Box>
                                )
                            )}
                            {screenType !== 'MOBILE' && (
                                <div onClick={() => sliderRef.current.slickNext()} className="next">
                                    <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
                                </div>
                            )}
                        </Container>
                    </div>
                </Box>
            ) : (
                ''
            )}
        </>
    );
}

export default BoxImgActor;
