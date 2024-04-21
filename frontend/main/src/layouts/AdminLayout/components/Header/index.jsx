import React from 'react';

import { Container } from '@/components/layout';
import { Typography } from '@/components/Typhograpy';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Badge, TextField } from '@mui/material';
import tw from 'twin.macro';
import { routerList } from '@/router';
import { useLocation } from 'react-router-dom';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { useMobileScreen } from '@/hooks/views';

const Wrapper = tw.div`h-[67px] w-full flex items-center  border-solid border-gray-100 border-2 border-t-0 border-l-0 border-r-0 justify-between px-4`;

export const Header = ({ toggleShowDrawer }) => {
    const location = useLocation();
    const isMobileScreen = useMobileScreen();
    const adminRouter = routerList.find((router) => router.path === '/admin');
    const [title, setTitle] = React.useState('Dashboard');
    React.useEffect(() => {
        const currentRouter = adminRouter.children.find(
            (router) => router.path === location.pathname.replace('/admin/', '')
        );
        setTitle(currentRouter.title);
    }, [location]);
    return (
        <Wrapper>
            {isMobileScreen && <DehazeIcon tw="cursor-pointer" onClick={toggleShowDrawer} />}
            <Typography variant="h4" tw="font-semibold mx-2">
                {title}
            </Typography>
            <Container tw="gap-6 flex items-center justify-end">
                <TextField placeholder="Search..." css={tw`[.MuiInputBase-input]:(py-2)`} />
                <Badge badgeContent={4} color="primary" tw="cursor-pointer">
                    <MailIcon color="action" />
                </Badge>
                <Avatar
                    src="https://freenice.net/wp-content/uploads/2021/08/hinh-anh-avatar-dep.jpg"
                    alt="ok"
                />
            </Container>
        </Wrapper>
    );
};
