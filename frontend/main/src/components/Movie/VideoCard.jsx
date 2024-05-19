import BoxField from '@/components/Forms/BoxField/BoxField';
import { Typography } from '@/components/Typhograpy';
import { ThumbUpOutlined } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import TextTruncate from 'react-text-truncate';
import './style.css';
import { Link } from 'react-router-dom';
import { useResponsive } from '../../utils/useResponsive';

const VideoCard = (props) => {
    const { movie } = props;
    const { screenType } = useResponsive();
    return (
        <Link to={`/watch/${movie._id}`} params={{ idWatch: movie._id }}>
            <Container
                maxWidth="xl"
                className="videocard"
                sx={{
                    width: screenType !== 'MOBILE' ? '450px !important' : '400px !important',
                    height: screenType !== 'MOBILE' ? '380px !important' : '300px !important',
                }}
            >
                <BoxField className="videocard__img">
                    <img
                        src={movie?.image}
                        alt={movie?.name}
                        style={{
                            margin: '0 auto',
                            width: screenType !== 'MOBILE' ? '450px' : '400px',
                            height: screenType !== 'MOBILE' ? '280px' : '200px',
                            objectFit: 'cover',
                            verticalAlign: 'bottom',
                            borderRadius: '10px',
                        }}
                    />
                </BoxField>
                <TextTruncate
                    line={screenType !== 'MOBILE' ? 2 : 3}
                    element="p"
                    text={movie?.description}
                    truncateText="..."
                />
                <Typography variant="h2" component="h2" color="inherit">
                    {movie?.name}
                </Typography>
                <BoxField className="videocard__stats">
                    <Typography variant="body2" component="p" color="inherit">
                        {movie?.durationStr + '•'}
                    </Typography>
                    <Typography variant="body2" component="p" color="inherit">
                        {movie?.totalView + ' lượt xem' + '•'}
                    </Typography>
                    <BoxField
                        sx={{
                            display: 'flex',
                        }}
                    >
                        <ThumbUpOutlined />
                        <Typography variant="body2" component="p" color="inherit">
                            {movie?.totalVote}
                        </Typography>
                    </BoxField>
                </BoxField>
            </Container>
        </Link>
    );
};

export default VideoCard;
