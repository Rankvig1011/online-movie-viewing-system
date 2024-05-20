import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

const CustomTextField = (props) => {
    const { label, validator, onChange, type, name, autoComplete, ...children } = props;
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        const newValue = e.target.value;
        if (validator) {
            const errorMessage = validator(newValue);
            setValue(newValue);
            setError(errorMessage);
            onChange(!errorMessage);
            return;
        } else {
            setValue(newValue);
            onChange(newValue);
        }
    };
    return (
        <TextField
            label={label}
            value={value}
            onChange={handleChange}
            type={type}
            name={name}
            validator={validator}
            helperText={error}
            autoComplete={autoComplete}
            error={Boolean(error)}
            {...children}
        />
    );
};

export default CustomTextField;
