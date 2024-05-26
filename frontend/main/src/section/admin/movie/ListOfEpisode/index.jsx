import { DialogForm } from '@/components/DialogForm';
import { ModalCustom } from '@/components/ModalCustom';
import { Text } from '@/components/Typhograpy';
import { UnstyledButton } from '@/components/interaction';
import { Container, Grid } from '@/components/layout';
import { useDeleteEpisode, useEpisodes } from '@/hooks/movie';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Pagination } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

const TextCustom = tw.span`text-black text-sm font-medium truncate`;

export const ListOfEpisode = ({ movie }) => {
    const [episodeId, setEpisodeId] = React.useState();
    const { deleteEpisode } = useDeleteEpisode();
    const { episodes } = useEpisodes(movie._id);

    const handleDeleteEpisode = () => {
        deleteEpisode(episodeId);
    };

    const itemInPage = React.useRef(10);
    const episodeSplitByPage = React.useMemo(() => {
        if (episodes.length > 0) {
            return episodes.reduce((acc, _, index) => {
                const pageIndex = Math.floor(index / itemInPage.current);
                if (!acc[pageIndex]) {
                    acc[pageIndex] = [];
                }
                acc[pageIndex].push(_);
                return acc;
            }, []);
        }
        return [];
    }, [episodes]);

    const [episodeData, setEpisodeData] = React.useState(episodeSplitByPage[0]);

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        setEpisodeData(episodeSplitByPage[value - 1]);
    };

    React.useEffect(() => {
        setEpisodeData(episodeSplitByPage[0]);
    }, [episodeSplitByPage]);

    const listColumns = {
        image: tw`col-span-2`,
        alias: tw`col-span-5`,
        duration: tw`col-span-2`,
        actions: tw`col-span-3 text-center`,
    };
    return (
        <Container tw="flex-col border">
            <Grid tw="w-full py-4 px-4 border-b">
                {Object.keys(listColumns).map((item, index) => (
                    <Grid.Col key={index} css={listColumns[item]}>
                        <Text tw="font-semibold">{item.toUpperCase()}</Text>
                    </Grid.Col>
                ))}
            </Grid>
            {episodeData &&
                episodeData
                    .sort((a, b) => a.position - b.position)
                    .map((episode, index) => (
                        <Grid
                            key={index}
                            tw="w-full p-2 px-4 my-1 bg-white rounded-md duration-200 cursor-pointer border-b hover:(-translate-y-1 shadow-md)"
                        >
                            <Grid.Col tw="col-span-2 flex items-center">
                                <Container>
                                    <img src={episode.coverImage} width={'100px'} tw="rounded-md" />
                                </Container>
                            </Grid.Col>
                            <Grid.Col tw="col-span-5 flex items-center">
                                <TextCustom>{episode.alias}</TextCustom>
                            </Grid.Col>
                            <Grid.Col tw="col-span-2 flex items-center">
                                <TextCustom>{episode.durationStr}</TextCustom>
                            </Grid.Col>
                            <Grid.Col tw="col-span-3 flex items-center">
                                <Container tw="border-l-2 border-gray-100 flex items-center justify-center gap-2 px-2">
                                    <UnstyledButton>
                                        <div>
                                            <EditIcon size={24} tw="text-primary" />
                                        </div>
                                        <TextCustom tw="text-xs hidden md:block">Edit</TextCustom>
                                    </UnstyledButton>
                                    <UnstyledButton onClick={() => setEpisodeId(episode._id)}>
                                        <div>
                                            <DeleteIcon size={20} tw="text-danger" />
                                        </div>
                                        <TextCustom tw="!text-danger text-xs hidden md:block">
                                            Delete
                                        </TextCustom>
                                    </UnstyledButton>
                                </Container>
                            </Grid.Col>
                        </Grid>
                    ))}
            {episodes.length > itemInPage.current && (
                <Container tw="justify-end py-2">
                    <Pagination
                        count={Math.ceil(episodes.length / itemInPage.current)}
                        page={page}
                        onChange={handleChange}
                    />
                </Container>
            )}
            <ModalCustom opened={Boolean(episodeId)} onClose={() => setEpisodeId()}>
                <Container tw="w-[500px]">
                    <DialogForm onCancel={() => setEpisodeId()} onConfirm={handleDeleteEpisode} />
                </Container>
            </ModalCustom>
        </Container>
    );
};
