import { Box, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import imgs from './img2.png';
function Section() {
    return (
        <>
            <Container sx={{ margin: '10vh auto', height: 'auto', borderRadius: '20px', backgroundColor: '#F9FBFC', width: '80vw' }}>
                <Grid container spacing={2}>
                <Grid item xs={12} lg={6} md={6}>
                    <CardMedia
                                    sx={{ height: 300, width: 250 ,objectFit:'contain'}}
                                    image={imgs}
                                    title="owner Imaged"
                                />
                    </Grid>
                    <Grid item xs={12} lg={6} md={6}>
                        <Box component="section" sx={{ p: 3, color: 'black', fontFamily: 'poppins' }}>
                            <Typography variant="h5" gutterBottom>
                                Why I Started Bloger
                            </Typography>
                            <Typography variant="caption" gutterBottom>
                                My name is Dhruv Zanzmera And i am Founder of Bloger. Bloger is my passion Which is Why I'm so excited to launch this new Product
                            </Typography>
                            <Box sx={{display:'flex',alignItems:'center',marginTop:'8%'}}>
                                <CardMedia
                                    sx={{ height: 50, width: 50, borderRadius: '50%' }}
                                    image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                    title="owner Imaged"
                                />
                                <Typography variant="caption" sx={{paddingTop:'5px',paddingLeft:'10px'}} gutterBottom>
                                    Dhruv Zanzmera
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    

                </Grid>
            </Container>
        </>
    )
}

export default Section
