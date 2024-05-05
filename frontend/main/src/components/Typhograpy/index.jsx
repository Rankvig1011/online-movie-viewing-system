import React from 'react';
import tw from 'twin.macro';

export const Typography = ({ variant = 'h6', children, ...props }) => {
    let StyledTypography;
    switch (variant) {
        case 'h1':
            StyledTypography = tw.span`text-4xl`;
            break;
        case 'h2':
            StyledTypography = tw.span`text-3xl`;
            break;
        case 'h3':
            StyledTypography = tw.span`text-2xl`;
            break;
        case 'h4':
            StyledTypography = tw.span`text-xl`;
            break;
        case 'h5':
            StyledTypography = tw.span`text-lg`;
            break;
        case 'h6':
            StyledTypography = tw.span`text-base`;
            break;
        default:
            StyledTypography = tw.span`text-base`;
            break;
    }

    return <StyledTypography {...props}>{children}</StyledTypography>;
};

export const Text = tw.div`text-sm text-black font-medium`;
