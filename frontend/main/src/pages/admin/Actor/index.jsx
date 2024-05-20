import { Container } from '@/components/layout';
import { ModalCustom } from '@/components/ModalCustom';
import { useActor } from '@/hooks/actor';
import { ActorForm, ListOfActor } from '@/section/admin/actor';
import { Button } from '@mui/material';
import React from 'react';
import tw from 'twin.macro';

export const Actor = () => {
    const { actors } = useActor();
    const [isOpenAddNewActor, setIsOpenAddNewActor] = React.useState(false);
    const [editActorInfo, setEditActorInfo] = React.useState();
    const handleOpenAddNewActor = () => setIsOpenAddNewActor(true);
    const handleCloseAddNewActor = () => setIsOpenAddNewActor(false);

    return (
        <>
            <Container tw="flex-col p-4 gap-2">
                <Container>
                    <Button variant="contained" onClick={handleOpenAddNewActor}>
                        New Actor
                    </Button>
                </Container>
                <Container tw="gap-2 flex-col xl:flex-row">
                    <Container tw="w-full xl:w-1/2" css={[!editActorInfo && tw`!w-full`]}>
                        <ListOfActor actors={actors} setActorInfo={setEditActorInfo} />
                    </Container>
                    {editActorInfo && (
                        <Container tw="border w-full xl:w-1/2 p-2">
                            <ActorForm actorInfo={editActorInfo} />
                        </Container>
                    )}
                </Container>
            </Container>
            <ModalCustom
                title="Add New Actor"
                opened={isOpenAddNewActor}
                onClose={handleCloseAddNewActor}
            >
                <Container tw="w-[1000px]">
                    <ActorForm onClose={handleCloseAddNewActor} />
                </Container>
            </ModalCustom>
        </>
    );
};
