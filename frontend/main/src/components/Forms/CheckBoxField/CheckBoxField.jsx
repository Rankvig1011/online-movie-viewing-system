import React from 'react';
import Checkbox from '@mui/material/Checkbox';
const CheckBoxField = (props) => {
    const { value, color, ...children } = props;
    return <Checkbox value={value} color={color} {...children} />;
};

export default CheckBoxField;
