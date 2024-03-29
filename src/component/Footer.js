import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <>
 
        <Grid item xs={12} sx={{ backgroundColor: '#F9FBFC',padding:'0px 10vw', color: 'gray' }}>
          <Grid container justifyContent="center" display='flex' spacing={2}>

            <Grid item xs={8} md={4} lg={3} >
              <Box sx={{ boxShadow: 'none', margin: '10px auto' }}>
                <Typography variant="h5" sx={{ color: 'black' }}>
                  Bloger
                </Typography>

              </Box>
            </Grid>
            <Grid item xs={8} md={4} lg={3} >
              <Box sx={{ boxShadow: 'none', margin: '10px auto', }}>
                <Typography variant="subtitle1" sx={{ paddingBottom: '10px 0px' }}>
                  Pricing
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Features
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Security
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Blog
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={4} lg={3} >
              <Box sx={{ boxShadow: 'none', margin: '10px auto', }}>
                <Typography variant="subtitle1" sx={{ paddingBottom: '10px 0px' }}>
                  Company
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  About
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Jobs
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Blog
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8} md={4} lg={3} >
              <Box sx={{ boxShadow: 'none', margin: '10px auto' }}>
                <Typography variant="h6" >
                  Get it
                </Typography>
                <Typography variant="subtitle2" sx={{ padding: '10px 0px' }}>
                  Available on Crome Store
                </Typography>
                <Button variant="contained" color="warning" size="large">
                  Download Now
                </Button>
              </Box>
            </Grid>

          </Grid>
        </Grid>
     
    </>
  )
}

export default Footer;
