import React from 'react';
import { Container, Grid } from '@/components/layout';
import { Avatar, Tooltip } from '@mui/material';
import tw from 'twin.macro';
import { Text } from '@/components/Typhograpy';
import { UnstyledButton } from '@/components/interaction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { ModalCustom } from '@/components/ModalCustom';
import { DialogForm } from '@/components/DialogForm';

const TextCustom = tw.span`text-black text-sm font-medium truncate`;

export const ListOfActor = ({ setActorInfo }) => {
    const [actorId, setActorId] = React.useState();

    const actors = [
        {
            id: 1,
            name: 'Test1',
            images: [
                'https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
                'https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
            ],
        },
        {
            id: 2,
            name: 'Test2',
            images: [
                'https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
                'https://image.tmdb.org/t/p/w500/6Wdl9N6dL0Hi0T1qJLWSz6gMLbd.jpg',
            ],
        },
    ];
    const listColumns = {
        id: tw`col-span-1 text-center`,
        name: tw`col-span-3`,
        image: tw`col-span-5`,
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
            {actors.map((actor, index) => (
                <Grid
                    key={index}
                    tw="w-full p-2 px-4 my-1 bg-white rounded-md duration-200 cursor-pointer border-b hover:(-translate-y-1 shadow-md)"
                >
                    <Grid.Col tw="col-span-1 flex items-center justify-center">
                        <TextCustom>{actor.id}</TextCustom>
                    </Grid.Col>
                    <Grid.Col tw="col-span-3 flex items-center">
                        <TextCustom>{actor.name}</TextCustom>
                    </Grid.Col>
                    <Grid.Col tw="col-span-5 flex items-center">
                        {actor.images.map((image, index) => (
                            <Tooltip label={actor.name} key={index}>
                                <Avatar
                                    radius="xl"
                                    tw="border-2 border-white border-solid !w-8 !h-8 shadow-md duration-200 hover:(scale-105)"
                                    css={[index !== 0 && tw`-ml-4`]}
                                    alt=""
                                    src={image}
                                />
                            </Tooltip>
                        ))}
                    </Grid.Col>
                    <Grid.Col tw="col-span-3 flex items-center">
                        <Container tw="border-l-2 border-gray-100 flex items-center justify-center gap-2 px-2">
                            <UnstyledButton onClick={() => setActorInfo(actor)}>
                                <div>
                                    <EditIcon size={24} tw="text-primary" />
                                </div>
                                <TextCustom tw="text-xs hidden md:block">Edit</TextCustom>
                            </UnstyledButton>
                            <UnstyledButton onClick={() => setActorId(actor.id)}>
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
            <ModalCustom opened={Boolean(actorId)} onClose={() => setActorId()}>
                <Container tw="w-[500px]">
                    <DialogForm onCancel={() => setActorId()} />
                </Container>
            </ModalCustom>
        </Container>
    );
};
