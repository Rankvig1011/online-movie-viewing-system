import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, ListItemButton, ListItemIcon } from '@mui/material';
import React from 'react';
import { Container } from '../layout';
import { Link } from 'react-router-dom';
import { Typography } from '../Typhograpy';

export const CollapseList = ({ icon, label, onClick, children, to }) => {
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
        setOpen(!open);
        onClick && onClick();
    };

    return (
        <Container tw="flex-col">
            <Link to={to}>
                <ListItemButton onClick={handleClick} tw="flex gap-4 !py-4">
                    {icon}
                    <Typography tw="font-semibold">{label}</Typography>
                    {children && (open ? <ExpandLess /> : <ExpandMore />)}
                </ListItemButton>
            </Link>
            {children && (
                <Collapse in={open} timeout="auto" unmountOnExit>
                    {children.map((child, index) => (
                        <Link key={index} to={child.to}>
                            <ListItemButton
                                onClick={child.onClick && child.onClick()}
                                sx={{ pl: 4, py: 4 }}
                                tw="flex gap-4"
                            >
                                <ListItemIcon>{child.icon}</ListItemIcon>
                                <Typography tw="font-bold">{child.label}</Typography>
                            </ListItemButton>
                        </Link>
                    ))}
                </Collapse>
            )}
        </Container>
    );
};
