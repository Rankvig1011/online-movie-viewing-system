import React from 'react';

import { DropZone } from '@/components/interaction/DropZone';
import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Button } from '@mui/material';
import { Typography } from '@/components/Typhograpy';

export const ActorForm = ({ actorInfo }) => {
    const [name, setName] = React.useState(actorInfo?.name || '');
    const [error, setError] = React.useState('');
    const [files, setFiles] = React.useState(actorInfo?.images || []);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            setError('Name is required');
            return;
        }
        actorInfo ? console.log('Edit') : console.log('Add');
        console.log({ name, images: files });
    };

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-2 flex-col" onSubmit={handleSubmit}>
                {actorInfo && <Typography tw="text-sm">ID : {actorInfo.id}</Typography>}
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
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </Container>
    );
};
