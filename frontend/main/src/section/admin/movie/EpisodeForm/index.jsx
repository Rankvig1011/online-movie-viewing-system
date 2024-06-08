import { DropZone } from '@/components/interaction/DropZone';
import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Typography } from '@/components/Typhograpy';
import { Box, Button } from '@mui/material';
import React from 'react';
import BackupIcon from '@mui/icons-material/Backup';
import ReactPlayer from 'react-player';
import CancelIcon from '@mui/icons-material/Cancel';
import { useForm } from 'react-hook-form';
import formatDuration from 'format-duration';
// eslint-disable-next-line no-unused-vars
import { uploadImage, uploadVideo } from '@/service/common';
import { useCreateEpisode, useUpdateEpisode } from '@/hooks/movie';

export const EpisodeForm = ({ movie, episode, onClose }) => {
    const [coverImage, setCoverImage] = React.useState(
        (episode?.coverImage && [episode?.coverImage]) || []
    );
    const [isPending, setIsPending] = React.useState(false);
    const [video, setVideo] = React.useState(episode?.link || null);
    const [duration, setDuration] = React.useState(episode?.duration || 0);

    const { createEpisode } = useCreateEpisode();
    const { updateEpisode } = useUpdateEpisode();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: episode?.name || '',
            movie: movie.name,
            coverImage: episode?.coverImage || '',
            link: episode?.link || '',
            alias: episode?.alias || '',
            position: episode?.position || 0,
            duration: episode?.duration || 0,
            durationStr: episode?.durationStr || '',
        },
    });
    const onSubmit = async (data) => {
        try {
            setIsPending(true);
            let image = '';
            if (typeof coverImage[0] === 'string') {
                image = coverImage[0];
            } else {
                const dataImage = await uploadImage(coverImage, 'episode');
                image = dataImage?.secure_url;
            }
            let videoLink = '';
            if (typeof video === 'string') {
                videoLink = video;
            } else {
                const dataVideo = await uploadVideo([video]);
                videoLink = dataVideo?.link;
            }

            const requestData = {
                ...data,
                coverImage: image,
                link: videoLink,
                movie: movie._id,
                duration,
                durationStr: formatDuration(duration * 1000),
            };
            if (episode) {
                updateEpisode({ id: episode._id, data: requestData });
            } else {
                console.log('requestData', requestData);
                createEpisode(requestData);
            }
            onClose && onClose();
        } catch (e) {
            console.log(e);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-4 flex-col" onSubmit={handleSubmit(onSubmit)}>
                {episode && <Typography tw="text-sm">ID : {episode._id}</Typography>}
                <InputBase label="Name" placeholder="Enter name category" {...register('name')} />
                <InputBase label="Movie" readOnly {...register('movie')} />
                <Container tw="gap-2">
                    <Container tw="flex-col gap-2">
                        <Typography tw="text-sm">Image Cover</Typography>
                        <DropZone files={coverImage} setFiles={setCoverImage} isSingle />
                    </Container>
                </Container>
                <Container tw="flex-row flex-wrap gap-2">
                    <Container tw="w-full border justify-center items-center border-dashed border-2 min-h-[300px] min-w-[240px]">
                        <input
                            type="file"
                            id="video"
                            tw="hidden"
                            onChange={(e) => {
                                console.log('e.target.files', e.target.files);
                                setVideo(e.target.files);
                            }}
                        />
                        <Container tw="flex flex-col justify-center items-center p-2 cursor-pointer">
                            {video ? (
                                <Box tw="relative ">
                                    <ReactPlayer
                                        width={'640px'}
                                        height={'360px'}
                                        tw="rounded-md [video]:rounded-md"
                                        url={
                                            typeof video === 'string'
                                                ? `http://localhost:3200/api/v1/streaming/${video}`
                                                : URL.createObjectURL(video[0])
                                        }
                                        controls
                                        onDuration={(value) => setDuration(value)}
                                    />
                                    <CancelIcon
                                        tw="absolute right-3 top-3 cursor-pointer hover:text-white"
                                        onClick={() => setVideo(null)}
                                    />
                                </Box>
                            ) : (
                                <label htmlFor="video" tw="cursor-pointer flex gap-2">
                                    <BackupIcon />
                                    <Typography tw="text-sm truncate">
                                        Upload video here, or click to select video
                                    </Typography>
                                </label>
                            )}
                        </Container>
                    </Container>
                </Container>
                <InputBase label="Alias" placeholder="Enter alias" {...register('alias')} />
                <InputBase
                    label="Position"
                    placeholder="Enter position"
                    type="number"
                    {...register('position')}
                />

                <Button type="submit" variant="contained" disabled={isPending}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};
