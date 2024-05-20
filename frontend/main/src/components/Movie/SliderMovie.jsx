import Typography from '@mui/material/Typography';
import React, { useRef } from 'react';
// import BoxField from '@/components/Forms/BoxField/BoxField';
// import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
// import TextTruncate from 'react-text-truncate';
import BoxField from '@/components/Forms/BoxField/BoxField';
import { ThumbUpOutlined } from '@mui/icons-material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './style.css';
import { useResponsive } from '../../utils/useResponsive';
const SliderMovie = (props) => {
    const { moviesCategories } = props;
    const { screenType } = useResponsive();
    const sliderRef = useRef();
    const settings = {
        arrows: false,
        dots: true,
        swipeToSlide: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: screenType === 'MOBILE' ? 1 : 5,
        slidesToScroll: screenType === 'MOBILE' ? 1 : 5,
    };
    const styleImg = {
        borderRadius: '10px',
        height: screenType !== 'MOBILE' ? '400px' : '200px',
        width: screenType !== 'MOBILE' ? '250px' : '100%',
    };
    return (
        <>
            <Typography
                component="h4"
                variant="h5"
                color="inherit"
                gutterBottom
                key={moviesCategories._id}
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
                {moviesCategories.name}
            </Typography>
            <div className="container-slider">
                <Container maxWidth="xl" className="slider">
                    {screenType !== 'MOBILE' && (
                        <div onClick={() => sliderRef.current.slickPrev()} className="prev">
                            <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
                        </div>
                    )}
                    <Slider {...settings} ref={sliderRef}>
                        {moviesCategories.movies.map((movie) => (
                            <Link to={`api/movie/${movie._id}`} key={movie._id}>
                                <div
                                    className="bg-image-container"
                                    style={{
                                        ...styleImg,
                                        backgroundImage:
                                            screenType !== 'MOBILE'
                                                ? `url(${movie.imageH})`
                                                : `url(${movie.image})`,
                                    }}
                                >
                                    <div className="gradient">
                                        <div className="text-container">
                                            <BoxField
                                                sx={{
                                                    display: 'flex',
                                                }}
                                            >
                                                <ThumbUpOutlined />
                                                <Typography
                                                    variant="body2"
                                                    component="p"
                                                    color="inherit"
                                                >
                                                    {movie?.totalVote}
                                                </Typography>
                                            </BoxField>
                                            <div className="label">{movie.durationStr}</div>
                                            <div className="body">{movie.name}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                    {screenType !== 'MOBILE' && (
                        <div onClick={() => sliderRef.current.slickNext()} className="next">
                            <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
                        </div>
                    )}
                </Container>
            </div>
        </>
    );
};

export default SliderMovie;
