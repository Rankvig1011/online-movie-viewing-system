import React from 'react';

import { DropZone } from '@/components/interaction/DropZone';
import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';

export const AddNewActor = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log('errors', errors);
    return (
        <Container tw="flex-col py-2 w-[1000px]">
            <form tw="flex gap-2 flex-col" onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    <InputBase label="Name" placeholder="Enter name actor" {...register('name')} />
                </div>
                <DropZone />
                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </Container>
    );
};
