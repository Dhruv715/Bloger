import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <Grid item xs={12} lg={12} md={12} >
            <Box
                sx={{
                    color: 'white',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,1) 10%, rgba(128,128,128,1) 90%)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '70vh',
                    width: '100%',
                    fontWeight: '700',
                    fontSize: '2rem'
                }}
                
            >
                <Typography variant="h4"  gutterBottom>
                    Bloger
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    All News about Bloger in one Place
                </Typography>
            </Box>
        </Grid>
    )
}

export default Header
