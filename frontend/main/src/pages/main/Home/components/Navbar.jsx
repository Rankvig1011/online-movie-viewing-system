import React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
function Navbar(props) {
    const { sections, handleChangeCategory } = props;
    return (
        <Container maxWidth="xl">
            <Toolbar
                component="nav"
                variant="dense"
                sx={{
                    justifyContent: 'space-between',
                    overflowX: 'auto',
                    backgroundColor: '#f5f5f5',
                    // borderBottom: '1px solid #e0e0e0',
                    padding: '10px 0',
                    borderRadius: '10px',
                }}
                // mt={100}
            >
                {sections.map((section) => (
                    <Button
                        color="inherit"
                        noWrap
                        key={section.name}
                        variant="body2"
                        sx={{
                            p: 1,
                            flexShrink: 0,
                            borderBottom: '2px solid transparent',
                            '&:hover': { borderBottom: '2px solid #f50057' },
                        }}
                        underline="none"
                        onClick={() => {
                            handleChangeCategory(section._id);
                        }}
                    >
                        <Typography variant="h6" component="h2" color="inherit">
                            {section.name}
                        </Typography>
                    </Button>
                ))}
            </Toolbar>
        </Container>
    );
}

Navbar.propTypes = {
    sections: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
    title: PropTypes.string.isRequired,
};
export default Navbar;
