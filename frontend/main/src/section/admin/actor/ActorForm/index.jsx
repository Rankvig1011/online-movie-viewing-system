import React from 'react';

import { DropZone } from '@/components/interaction/DropZone';
import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Button } from '@mui/material';
import { Typography } from '@/components/Typhograpy';
import { useCreateActor, useUpdateActor } from '@/hooks/actor';

export const ActorForm = ({ actorInfo, onClose }) => {
    const { createActor, isPending: isCreatPending } = useCreateActor();
    const { updateActor, isPending: isUpdatePending } = useUpdateActor();
    const [name, setName] = React.useState(actorInfo?.name || '');
    const [error, setError] = React.useState('');
    const [files, setFiles] = React.useState(actorInfo?.image || []);
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (!name) {
                setError('Name is required');
                return;
            }
            if (actorInfo) {
                updateActor({
                    id: actorInfo._id,
                    data: { id: actorInfo._id, name, image: files },
                });

                return;
            } else {
                createActor({ name, image: files });
                onClose && onClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    React.useEffect(() => {
        setName(actorInfo?.name || '');
        setFiles(actorInfo?.image || []);
    }, [actorInfo]);

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-2 flex-col" onSubmit={handleSubmit}>
                {actorInfo && <Typography tw="text-sm">ID : {actorInfo._id}</Typography>}
                <InputBase
                    label="Name"
                    placeholder="Enter name actor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={error}
                />
                <Container tw="flex-col gap-2">
                    <Typography tw="text-sm">List Of Image</Typography>
                    <DropZone files={files} setFiles={setFiles} />
                </Container>
                <Button
                    type="submit"
                    variant="contained"
                    disabled={isCreatPending || isUpdatePending}
                >
                    Submit
                </Button>
            </form>
        </Container>
    );
};
