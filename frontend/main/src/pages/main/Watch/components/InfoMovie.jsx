import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThumbUpOutlined } from '@mui/icons-material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import moment from 'moment';
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { usePostVote, useVoteDetail, useDeleteVote } from '@/hooks/vote';
import { useUpdateViewMovie } from '@/hooks/movie';
import { Bounce, toast } from 'react-toastify';
function InfoMovie(props) {
    const { movieData, handleEpisode } = props;
    const { voteData } = useVoteDetail(movieData?._id);
    const { updateView } = useUpdateViewMovie();
    const { postVote } = usePostVote();
    const { deleteVote } = useDeleteVote();
    const [useVote, setUseVote] = useState([]);
    const [isUseVoteId, SetUseVoteId] = useState(null);
    const profileLocal = localStorage.getItem('profile');
    const profileLocalParse = JSON.parse(profileLocal);
    const movieViewLocal = localStorage.getItem('movieView');
    const movieViewLocalParse = JSON.parse(movieViewLocal);
    const handleVoteMovie = () => {
        if (!useVote?.includes(profileLocalParse._id)) {
            const payload = {
                user: profileLocalParse._id,
                movie: movieData?._id,
                vote: 0,
            };
            postVote(payload);
        } else {
            toast.error('Bạn đã yêu thích' || 'Fail', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
                transition: Bounce,
            });
        }
    };
    const handleUnderVoteMovie = () => {
        deleteVote(isUseVoteId);
    };
    const onPlayView = () => {
        if (!movieViewLocalParse?.includes(movieData?._id)) {
            let newArr = [];
            if (movieViewLocalParse?.length) {
                newArr = movieViewLocalParse.push(movieData?._id);
            } else {
                newArr.push(movieData?._id);
            }
            localStorage.setItem('movieView', JSON.stringify(newArr));
            updateView(movieData?._id);
        }
        handleEpisode();
    };
    useEffect(() => {
        if (voteData?.length) {
            const newArr = voteData?.map((item) => {
                if (item?.user == profileLocalParse._id) {
                    SetUseVoteId(item?._id);
                }
                return item?.user;
            });
            setUseVote(newArr);
        } else {
            SetUseVoteId(null);
            setUseVote([]);
        }
    }, [profileLocalParse._id, voteData]);
    return (
        <>
            <Grid container spacing={2} sx={{ py: 3, px: 3 }}>
                <Grid
                    item
                    xs={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    {/* Image movie */}
                    <Box
                        sx={{
                            width: '300px',
                            height: '450px',
                        }}
                    >
                        <img
                            src={movieData?.imageH}
                            alt={movieData?.slug}
                            style={{
                                margin: '0 auto',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                verticalAlign: 'bottom',
                                borderRadius: '10px',
                            }}
                        />
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                my: 1,
                            }}
                        >
                            <Tooltip title="Xem phim">
                                <IconButton type="submit" size="large" onClick={onPlayView}>
                                    <PlayCircleIcon />
                                </IconButton>
                            </Tooltip>
                            {/* <Tooltip title="Theo dõi">
                                <IconButton
                                    type="submit"
                                    color="primary"
                                    mr={1}
                                    size="large"
                                    sx={{ mx: 1 }}
                                >
                                    <AddCircleOutlineIcon />
                                </IconButton>
                            </Tooltip> */}
                            {isUseVoteId ? (
                                <Tooltip title="Bỏ yêu thích">
                                    <IconButton
                                        type="submit"
                                        size="large"
                                        color="secondary"
                                        onClick={handleUnderVoteMovie}
                                    >
                                        <ThumbUpIcon />
                                    </IconButton>
                                </Tooltip>
                            ) : (
                                <Tooltip title="Yêu thích">
                                    <IconButton
                                        type="submit"
                                        size="large"
                                        // color="secondary"
                                        onClick={handleVoteMovie}
                                    >
                                        <ThumbUpOffAltIcon />
                                    </IconButton>
                                </Tooltip>
                            )}
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={8}
                    sx={{
                        justifyContent: 'center',
                        alignContent: 'center',
                    }}
                >
                    {/* infor movie */}
                    <Box>
                        {/* title movie */}
                        <Box>
                            <Typography component="h4" variant="h4" color="inherit" gutterBottom>
                                {movieData?.name}
                            </Typography>
                        </Box>
                        {/* view and vote */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    pr: 2,
                                    mt: 2,
                                    borderRight: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <ThumbUpOutlined />
                                <Typography component="p" color="inherit" sx={{ mx: 1 }}>
                                    {movieData?.totalVote}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    px: 2,
                                    mt: 2,
                                    borderRight: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <RemoveRedEyeIcon />
                                <Typography component="p" color="inherit" sx={{ mx: 1 }}>
                                    {movieData?.totalView}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    px: 2,
                                    mt: 2,
                                    borderRight: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                <Typography component="p" color="inherit" sx={{ mx: 1 }}>
                                    {movieData?.durationStr}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    px: 2,
                                    mt: 2,
                                }}
                            >
                                <Typography component="p" color="inherit" sx={{ mx: 1 }}>
                                    {moment(movieData?.createdAt).format('YYYY')}
                                </Typography>
                            </Box>
                        </Box>
                        {/*description  */}
                        <Box
                            sx={{
                                pt: { sm: 2 },
                                mt: 2,
                                borderTop: '1px solid',
                                borderColor: 'divider',
                            }}
                        >
                            <Typography variant="p" color="inherit" paragraph>
                                {movieData?.description}
                            </Typography>
                        </Box>
                        {/* infor actor and category */}
                        {/* category */}
                        <Box
                            sx={{
                                pt: { sm: 2 },
                                mt: 2,
                                width: '100%',
                                borderTop: '1px solid',
                                borderColor: 'divider',
                                justifyContent: 'flex-start',
                                display: 'flex',
                            }}
                            spacing={2}
                        >
                            {/* category */}

                            <Typography variant="h6" color="inherit" mr={2}>
                                {'Thể Loại:'}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="inherit"
                                sx={{
                                    pr: 2,
                                    borderRight: '1px solid',
                                    borderColor: 'divider',
                                }}
                            >
                                {movieData?.category?.name}
                            </Typography>
                            <Typography
                                variant="h6"
                                color="inherit"
                                sx={{
                                    px: 2,
                                }}
                            >
                                {movieData?.category?.description}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                pt: 1,
                                mt: 1,
                                width: '100%',
                                justifyContent: 'flex-start',
                                display: 'flex',
                            }}
                            spacing={2}
                        >
                            {/* actor */}

                            <Typography variant="h6" color="inherit" mr={2}>
                                {'Diễn viên:'}
                            </Typography>
                            {movieData?.actors?.map((item, index) => {
                                return (
                                    <>
                                        <Typography
                                            variant="h6"
                                            color="inherit"
                                            sx={{
                                                pr: 1,
                                            }}
                                        >
                                            {item?.name +
                                                (index === Number(movieData?.actors?.length - 1)
                                                    ? ''
                                                    : ',')}
                                        </Typography>
                                    </>
                                );
                            })}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default InfoMovie;
