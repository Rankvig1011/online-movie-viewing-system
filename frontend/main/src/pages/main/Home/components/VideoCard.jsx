import BoxField from '@/components/Forms/BoxField/BoxField';
import { Typography } from '@/components/Typhograpy';
import { ThumbUpOutlined } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react';
import TextTruncate from 'react-text-truncate';
import '../style.css';

const VideoCard = (props) => {
    const { movie } = props;
    console.log(movie);
    return (
        <Container maxWidth="xl" className="videocard">
            <BoxField className="videocard__img">
                <img src={movie?.image} alt={movie?.name} />
            </BoxField>
            <TextTruncate line={1} element="p" text={movie?.description} truncateText="..." />
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
    );
};

export default VideoCard;
