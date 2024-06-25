/* eslint-disable no-unused-vars */
import React from 'react';

import { DropZone } from '@/components/interaction/DropZone';
import { InputBase } from '@/components/interaction/InputBase';
import { Container } from '@/components/layout';
import { Typography } from '@/components/Typhograpy';
import { useActor } from '@/hooks/actor';
import { useCategory } from '@/hooks/category';
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material';
import { Controller, useFieldArray, useForm } from 'react-hook-form';
import { useCreateMovie, useUpdateMovie } from '@/hooks/movie';
import { uploadImage } from '@/service/common';

export const MovieForm = ({ movieInfo, onClose }) => {
    const { categories } = useCategory();
    const { actors } = useActor();
    const [isPending, setIsPending] = React.useState(false);
    const [imageCover, setimageCover] = React.useState(
        (movieInfo?.image && [movieInfo?.image]) || []
    );
    const [imageH, setimageH] = React.useState((movieInfo?.imageH && [movieInfo?.imageH]) || []);
    const { createMovie } = useCreateMovie();
    const { updateMovie } = useUpdateMovie();

    const defaultValues = {
        name: movieInfo?.name || '',
        description: movieInfo?.description || '',
        image: movieInfo?.image || '',
        imageH: movieInfo?.imageH || '',
        category: movieInfo?.category?._id || '',
        duration: movieInfo?.duration || 0,
        durationStr: movieInfo?.durationStr || '',
        actors: movieInfo?.actors?.map((actor) => actor._id) || [],
        isVip: movieInfo?.isVip || false,
    };

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = useForm({
        defaultValues,
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'actors',
    });

    const onSubmit = async (data) => {
        try {
            setIsPending(true);
            if (!movieInfo) {
                if (imageCover[0] && imageH[0]) {
                    const imageSrc = await uploadImage(imageCover, 'movie');
                    const imageHSrc = await uploadImage(imageH, 'movie');
                    const requestData = {
                        ...data,
                        image: imageSrc?.secure_url,
                        imageH: imageHSrc?.secure_url,
                    };
                    createMovie(requestData);
                    onClose && onClose();
                }
            } else {
                if (imageCover[0] && imageH[0]) {
                    let image;
                    let imageHSrc;
                    if (typeof imageCover[0] === 'string') {
                        image = imageCover[0];
                    } else {
                        const dataImage = await uploadImage(imageCover, 'movie');
                        image = dataImage?.secure_url;
                    }
                    if (typeof imageH[0] === 'string') {
                        imageHSrc = imageH[0];
                    } else {
                        const dataImage = await uploadImage(imageH, 'movie');
                        imageHSrc = dataImage?.secure_url;
                    }
                    const requestData = { ...data, image, imageH: imageHSrc };
                    updateMovie({ id: movieInfo._id, data: requestData });
                    onClose && onClose();
                }
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsPending(false);
        }
    };

    return (
        <Container tw="flex-col py-2">
            <form tw="flex gap-4 flex-col" onSubmit={handleSubmit(onSubmit)}>
                <Typography tw="text-sm">ID : </Typography>
                <InputBase
                    label="Tên"
                    placeholder="Enter name category"
                    {...register('name', { required: 'Name is required' })}
                    error={errors.name?.message}
                />
                <InputBase
                    multiline
                    label="Mô tả"
                    placeholder="Enter description"
                    {...register('description', { required: 'Description is required' })}
                    error={errors.description?.message}
                />
                <FormControl fullWidth>
                    <InputLabel>Thể loại</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        label="Category"
                        {...register('category', { required: 'Category is required' })}
                        error={errors.category?.message}
                        defaultValue={defaultValues.category}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category._id} value={category._id}>
                                {category.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Container tw="gap-2">
                    <Container tw="flex-col gap-2">
                        <Typography tw="text-sm">Ảnh ngang</Typography>
                        <DropZone files={imageCover} setFiles={setimageCover} isSingle />
                    </Container>
                    <Container tw="flex-col gap-2">
                        <Typography tw="text-sm">Ảnh dọc</Typography>
                        <DropZone files={imageH} setFiles={setimageH} isSingle />
                    </Container>
                </Container>
                <InputBase
                    label="Thời gian"
                    placeholder="Enter name duration"
                    {...register('duration')}
                />
                <InputBase
                    label="Thời gian chuỗi"
                    placeholder="Enter name duration str"
                    {...register('durationStr')}
                />
                {fields.map((field, index) => (
                    <div key={index}>
                        <Controller
                            name={`actors[${index}]`}
                            control={control}
                            defaultValue={field}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel>Diễn viên</InputLabel>
                                    <Select {...field} label="Category">
                                        {actors.map((actor) => (
                                            <MenuItem key={actor._id} value={actor._id}>
                                                {actor.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />

                        <button type="button" onClick={() => remove(index)}>
                            Xoá DV
                        </button>
                    </div>
                ))}
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox {...register('isVip')} defaultChecked={defaultValues.isVip} />
                        }
                        label="Vip"
                    />
                </FormGroup>
                <Button type="button" onClick={() => append('')}>
                    Thêm diễn viên
                </Button>
                <Button type="submit" variant="contained" disabled={isPending}>
                    Submit
                </Button>
            </form>
        </Container>
    );
};
