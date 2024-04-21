import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
const CustomFormControlLabel = (props) => {
    const { label, control, sx, ...children } = props;
    return <FormControlLabel label={label} control={control} sx={sx} {...children} />;
};

export default CustomFormControlLabel;
