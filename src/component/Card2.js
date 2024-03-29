import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Card2() {
    const data = [{
        url: 'https://tarynwhiteaker.com/wp-content/uploads/2020/12/HallwayGalleryWall-13-700x1050.jpg',
        title: "Why i started Bloger",
        desc: 'My name is Dhruv Zanzmera I am founder of Bloger.Bloger is my passion',
        writer: 'Dhruv Zanzmera',
        time: 'Feb 14,2019'
    },
    {
        url: 'https://static.citylifestyle.com/articles/coffee-and-books-2/5475a-1600.jpg?v=1',
        title: "Bloger Launces Public URL",
        desc: 'My name is Dhruv Zanzmera I am founder of Bloger.Bloger is my passion',
        writer: 'Dhruv Zanzmera',
        time: 'Feb 14,2018'
    },
    {
        url: 'https://cdn.dribbble.com/userupload/4169040/file/original-3bfa4d2f9a01d4cd8b0681a9daf913b7.jpg?resize=400x0',
        title: "My Fav Dashboard Design",
        desc: 'My name is Dhruv Zanzmera I am founder of Bloger.Bloger is my passion',
        writer: 'Dhruv Zanzmera',
        time: 'Feb 14,2019'
    },
    {
        url: 'https://media.istockphoto.com/id/475970456/photo/abstract-3d-rendering-of-flying-cube.jpg?s=612x612&w=0&k=20&c=dGzZLpcExMgl_Pw6cQ4R9EQXtZQBpNoFDo4W1dGqSGw=',
        title: "Why i started Bloger",
        desc: 'My name is Dhruv Zanzmera I am founder of Bloger.Bloger is my passion',
        writer: 'Dhruv Zanzmera',
        time: 'Feb 14,2019'
    }
    ]
    return (
        <>
            <Typography variant="h5" sx={{ marginTop: '5vh', textAlign: 'center', marginBottom: '5vh' }} gutterBottom>
                Featured Blogs
            </Typography>
            <Container >
            <Grid item xs={12}>
                {/* New Chages */}
            <Grid  container justifyContent="center" display='flex'  spacing={2}>
                {
                    data.map((ele) =>
                        <Grid item xs={8} md={6} lg={6} >
                            <Box sx={{ boxShadow: 'none', margin: '10px auto' , justifyContent:'center' , display:'flex' }}>
                                <Card sx={{ maxWidth: 345, boxShadow: 'none', borderRadius: '10px',backgroundColor:'#F9FBFC', border:'1px solid #F9FBFC'}}>
                                    <CardMedia
                                        sx={{ height: 160, borderRadius: '0px',objectFit:'cover' }}
                                        image={ele.url}
                                        title={ele.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="subtitle1" component="div">
                                            {ele.desc}
                                        </Typography>
                                        <Grid sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
            </Grid>
            </Container>
        </>
    )
}

export default Card2

