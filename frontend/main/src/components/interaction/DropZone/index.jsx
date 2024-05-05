import React from 'react';

import { Container } from '@/components/layout';
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@mui/icons-material/Backup';
import { Typography } from '@/components/Typhograpy';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box } from '@mui/material';

export const DropZone = ({ files = [], setFiles }) => {
    const onDrop = React.useCallback(
        (acceptedFiles) => {
            setFiles([...files, ...acceptedFiles]);
        },
        [files, setFiles]
    );
    const { getRootProps, getInputProps } = useDropzone({ onDrop });
    const previews = files.map((file, index) => {
        const imageUrl = typeof file === 'string' ? file : URL.createObjectURL(file);
        const handleRemoveFile = () => {
            const newFiles = files.filter((_, i) => i !== index);
            setFiles(newFiles);
        };
        return (
            <Box key={index} tw="relative">
                <img tw="rounded-md w-[240px] h-[300px] object-cover" alt="" src={imageUrl} />
                <CancelIcon
                    tw="absolute right-0 top-0 cursor-pointer hover:text-white"
                    onClick={handleRemoveFile}
                />
            </Box>
        );
    });
    return (
        <Container tw="flex-row flex-wrap gap-2">
            <Container
                tw="w-full border justify-center items-center border-dashed border-2 h-[300px] min-w-[240px]"
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <Container tw="flex-col justify-center items-center p-2">
                    <BackupIcon />
                    <Typography tw="text-sm truncate">
                        Drag and drop some files here, or click to select files
                    </Typography>
                </Container>
            </Container>
            {previews}
        </Container>
    );
};
