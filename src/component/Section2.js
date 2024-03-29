import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

function Section2() {
    return (
        <>
            <Container>
                <Grid item xs={12} lg={12} md={12} >
                    <Box sx={{ color: 'white', backgroundColor: '#6091F3', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', height: 'auto', padding: '50px 10px', fontWeight: '700', fontSize: '2rem', margin: '10vh auto', borderRadius: '10px' }}>
                        <Typography variant="h5" sx={{ margin: '20px auto' }} gutterBottom>
                            Get notified about our blogs published
                        </Typography>
                        <Box>
                            <TextField id="outlined-basic" placeholder='Enter Email Here..' sx={{ backgroundColor: 'white', color: 'white', border: 'none',outline: 'none',marginRight:'10px',padding:'0px', borderRadius: '10px'}} variant="outlined" />
                            {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
                            <Button variant="contained" color="warning" size="large">
                                Join Us
                            </Button>
                        </Box>
                        {/* <p>All News About Bloger in One Place</p> */}
                    </Box>
                </Grid>
            </Container>
        </>
    )
}

export default Section2;
