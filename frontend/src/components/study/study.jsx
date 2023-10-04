import React from 'react'
import Header from '../header/header'
import Footer from '../footer/Footer'
import { Button, Grid, Typography } from '@mui/material'

const Study = () => {
  return (
    <>
     <Header/>


<Grid container display={"flex"} justifyContent={"center"} alignItems={"center"} >
  <Grid item lg={6}>
    <Typography variant='h2'>STUDY MATERAIL</Typography>
  </Grid>
  <Grid item lg={6}>
    <Button>start class</Button>
  </Grid>
</Grid>


     {/* <Footer/> */}
    </>
  )
}

export default Study