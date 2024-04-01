import { Box, Grid, Stack } from '@mui/material';
import React from 'react';

function Navbar() {
    return (
        <Grid container spacing={2} sx={{ p: 2, height: '10vh', color: 'white', backgroundColor: 'black', alignItems: 'center' }}>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                Bloger
            </Grid>
            <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'right' }, paddingLeft: { md: '50px' }, paddingRight: { md: '50px' } }}>
                <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-end' } }}>
                    <Box sx={{ color: 'white' }}>Features</Box>
                    <Box sx={{ color: 'white' }}>Pricing</Box>
                    <Box sx={{ color: 'white' }}>Contact</Box>
                </Stack>
            </Grid>
        </Grid>
    );
}

export default Navbar;
