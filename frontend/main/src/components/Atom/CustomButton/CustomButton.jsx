import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
const CustomButton = (props) => {
    const { type, variant, sx, style, onClick, ...children } = props;
    return (
        <Button
            type={type}
            variant={variant}
            sx={sx}
            style={style}
            {...children}
            onClick={onClick}
        />
    );
};

CustomButton.propTypes = {
    type: PropTypes.string,
    variant: PropTypes.string,
    sx: PropTypes.object,
    onClick: PropTypes.func,
};
PropTypes.defaultProps = {
    type: 'button',
    variant: 'contained',
    sx: { mt: 1, mb: 1 },
    style: {},
    onClick: () => {},
};

export default CustomButton;
