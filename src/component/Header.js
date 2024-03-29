import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function Header() {
    return (
        <>

            <Grid item xs={12} lg={12} md={12} >
                <Box sx={{ color: 'white', backgroundColor: '#6091F3', alignItems: 'center', justifyContent: 'center', display: 'flex',flexDirection:'column', height: '30vh', width: '100%', fontWeight: '700', fontSize: '2rem' }}>
                    <Typography variant="h4" gutterBottom>
                        Bloger
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        All New about Bloger in one Place
                    </Typography>
                    {/* <p>All News About Bloger in One Place</p> */}
                </Box>
            </Grid>



        </>
    )
}

export default Header
