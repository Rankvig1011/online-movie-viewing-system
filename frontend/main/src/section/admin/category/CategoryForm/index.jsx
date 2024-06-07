/* eslint-disable no-unused-vars */
import React from 'react';

import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Button } from '@mui/material';
import { Typography } from '@/components/Typhograpy';
import { useForm } from 'react-hook-form';
import { useCreateCategory, useUpdateCategory } from '@/hooks/category';

export const CategoryForm = ({ categoryInfo, onClose }) => {
    const { createCategory, isPending: isCreatPending } = useCreateCategory();
    const { updateCategory, isPending: isUpdatePending } = useUpdateCategory();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: categoryInfo?.name || '',
            description: categoryInfo?.description || '',
        },
    });
    const onSubmit = async (data) => {
        try {
            if (categoryInfo) {
                updateCategory({
                    id: categoryInfo._id,
                    data,
                });

                return;
            } else {
                createCategory(data);
                onClose && onClose();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-2 flex-col" onSubmit={handleSubmit(onSubmit)}>
                {categoryInfo && <Typography tw="text-sm">ID : {categoryInfo._id}</Typography>}
                <InputBase
                    label="Name"
                    placeholder="Enter name category"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                />
                <InputBase
                    multiline
                    label="Description"
                    placeholder="Enter description"
                    {...register('description', { required: 'Description is required' })}
                    error={errors.description?.message}
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
