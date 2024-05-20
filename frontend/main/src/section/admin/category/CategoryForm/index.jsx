/* eslint-disable no-unused-vars */
import React from 'react';

import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Button } from '@mui/material';
import { Typography } from '@/components/Typhograpy';
import { useCreateActor, useUpdateActor } from '@/hooks/actor';
import { useForm } from 'react-hook-form';

export const CategoryForm = ({ categoryInfo, onClose }) => {
    const { createActor, isPending: isCreatPending } = useCreateActor();
    const { updateActor, isPending: isUpdatePending } = useUpdateActor();
    // const [name, setName] = React.useState(categoryInfo?.name || '');
    // const [error, setError] = React.useState('');
    // const [files, setFiles] = React.useState(actorInfo?.image || []);
    const { register } = useForm({
        defaultValues: {
            name: categoryInfo?.name || '',
            description: categoryInfo?.description || '',
        },
    });
    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            // if (!name) {
            //     setError('Name is required');
            //     return;
            // }
            // if (actorInfo) {
            //     updateActor({
            //         id: actorInfo._id,
            //         data: { id: actorInfo._id, name, image: files },
            //     });

            //     return;
            // } else {
            //     createActor({ name, image: files });
            //     onClose && onClose();
            // }
        } catch (error) {
            console.log(error);
        }
    };

    // React.useEffect(() => {
    //     setName(actorInfo?.name || '');
    //     setFiles(actorInfo?.image || []);
    // }, [actorInfo]);

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-2 flex-col" onSubmit={handleSubmit}>
                {categoryInfo && <Typography tw="text-sm">ID : {categoryInfo._id}</Typography>}
                <InputBase label="Name" placeholder="Enter name category" {...register('name')} />
                <InputBase
                    label="description"
                    placeholder="Enter description"
                    {...register('description')}
                />

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
``