import { Box, Grid, Stack } from '@mui/material'
import React from 'react'



function Navbar() {
    return (
        <>
            
                <Grid container spacing={2} sx={{ p: 2 , height:'10vh',color:'white',backgroundColor:'#6091F3',alignItems:'center'}}>
                    <Grid item xs={4} lg={6} md={6} >
                        Bloger
                    </Grid>
                    <Grid item xs={8} lg={6} md={6} sx={{textAlign:'right'}}>
                        <Stack direction="row" spacing={2}>
                            <Box>Features</Box>
                            <Box>Pricing</Box>
                            <Box>Contact</Box>                            
                        </Stack>
                    </Grid>
                    {/* <Grid item  lg={4} md={6} sx={{xs:{display:'none'},textAlign:'right'}}>
                        <Stack direction="row" spacing={2}>
                            <Box>Login</Box>
                            <Box sx={{border:'2px solid white', padding:'10px 20px'}}>SignUp</Box>
                       </Stack>
                    </Grid> */}
                </Grid>
            
        </>
    )
}

export default Navbar
