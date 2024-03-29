import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'

function Cardss() {
    const data = [{
        url: 'https://static.vecteezy.com/system/resources/thumbnails/010/111/102/small_2x/person-man-holding-pen-write-plan-or-idea-on-book-with-computer-laptop-on-desk-free-photo.jpg',
        desc: "Don'e miss a single match this season Wheather it's an away",
        writer: 'Mitchel',
        time: '1h ago'
    },
    {
        url: 'https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.jpg?s=612x612&w=0&k=20&c=jblput4MEg7QLUCIffJguBXIg1qYHXrpowBoLuiUasM=',
        desc: "Game or international tournament Wheather it's away",
        writer: 'Mitchel',
        time: '2h ago'
    },
    {
        url: 'https://t3.ftcdn.net/jpg/05/79/48/52/360_F_579485255_hzHox0stuQmBx5QViwnQqQjk7RD2AJza.jpg',
        desc: "Download to start streaming all major leagus,buffer-free",
        writer: 'Mitchel',
        time: '1h ago'
    }
    ]
    return (
        <>
            <Typography variant="h5" sx={{marginTop:'5vh',textAlign:'center',marginBottom:'5vh'}} gutterBottom>
                Popular Blogs
            </Typography>
            <Grid  container sx={{ display: 'flex',marginBottom:'10vh', alignItems: 'center', justifyContent:'space-evenly' }} spacing={2}>
                {
                    data.map((ele) =>
                        <Grid item xs={8} md={4} lg={3} >
                            <Box sx={{boxShadow:'none'}}>
                                <Card sx={{ maxWidth: 345 ,boxShadow:'none',backgroundColor:'#F9FBFC', border:'1px solid #F9FBFC',borderRadius:'20px'}}>
                                    <CardMedia
                                        sx={{ height: 140 ,borderRadius:'20px'}}
                                        image={ele.url}
                                        title={ele.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {ele.desc}
                                        </Typography>
                                        <Grid sx={{display:'flex',justifyContent:'space-between'}}>
                                            <Typography xs={6} lg={6} md={6} variant="subtitle2" gutterBottom>
                                                {ele.writer}
                                            </Typography>
                                            <Typography xs={6} lg={6} md={6} variant="caption" gutterBottom>
                                                {ele.time}
                                            </Typography>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Grid>
                    )
                }
            </Grid>
        </>
    )
}

export default Cardss

