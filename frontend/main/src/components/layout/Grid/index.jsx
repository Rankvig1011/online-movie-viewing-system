import React from 'react';
import tw from 'twin.macro';

const GridWrapper = tw.div`grid grid-cols-12 gap-4`;
const Col = tw.div``;

export const Grid = ({ children, ...rest }) => <GridWrapper {...rest}>{children}</GridWrapper>;

Grid.Col = Col;
