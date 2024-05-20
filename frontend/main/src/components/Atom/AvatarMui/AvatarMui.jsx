import React from 'react';
import Avatar from '@mui/material/Avatar';
const AvatarMui = (props) => {
    const { src, alt, ...children } = props;
    return <Avatar src={src} alt={alt} {...children} />;
};

export default AvatarMui;
