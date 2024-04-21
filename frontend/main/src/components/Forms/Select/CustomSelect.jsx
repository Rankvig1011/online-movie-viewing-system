import { SelectAll } from '@mui/icons-material';
import React from 'react';

const CustomSelect = (props) => {
    const { label, value, onChange, type, name, error, helperText, ...children } = props;
    return (
        <SelectAll
            label={label}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            error={error}
            helperText={helperText}
            {...children}
        />
    );
};

export default CustomSelect;
