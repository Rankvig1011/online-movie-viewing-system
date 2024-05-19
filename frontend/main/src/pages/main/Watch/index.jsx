import React from 'react';
import { useParams } from 'react-router-dom';
// import { useWatch } from '@/hooks/watch';
export const Watch = () => {
    const { id } = useParams();
    // const { id } = props;
    console.log(id);
    // const { watch, isLoading, isError } = useWatch();
    // console.log(watch, isLoading, isError);
    return <div>Watch</div>;
};
