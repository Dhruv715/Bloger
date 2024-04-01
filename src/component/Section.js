import { Box, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import imgs from './img2.png'
function Section() {
    return (
        <Box sx={{ background: 'linear-gradient(180deg, #F9FBFC 0%, #E3E6E8 100%)', padding: '10vh 0', borderRadius: '20px' }}>
            <Container sx={{ width: '80vw', margin: 'auto' }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={12} lg={6} md={6} sx={{display:'flex',justifyContent:'center'}}>
                        <CardMedia
                            sx={{ height: 300, width: 250, objectFit: 'contain' }}
                            image={imgs}
                            title="Owner Image"
                        />
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <Box sx={{ p: 3, color: 'black', fontFamily: 'poppins' }}>
                            <Typography variant="h5" gutterBottom>
                                Why I Started Bloger
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                My name is Dhruv Zanzmera And I am the Founder of Bloger. Bloger is my passion which is why I'm so excited to launch this new product.
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '8%' }}>
                                <CardMedia
                                    sx={{ height: 50, width: 50, borderRadius: '50%' }}
                                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    title="Owner Image"
                                />
                                <Typography variant="caption" sx={{ paddingTop: '5px', paddingLeft: '10px' }} gutterBottom>
                                    Dhruv Zanzmera
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Section;
