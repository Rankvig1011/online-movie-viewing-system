import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
const CustomButton = (props) => {
    const { type, variant, sx, style, ...children } = props;
    return <Button type={type} variant={variant} sx={sx} style={style} {...children} />;
};

CustomButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    sx: PropTypes.object,
};
PropTypes.defaultProps = {
    type: 'button',
    variant: 'contained',
    sx: {},
    style: {},
};

export default CustomButton;
