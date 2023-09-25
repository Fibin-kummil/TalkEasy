import { Box, Card, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const TrainerBody = () => {
  return (
    <>
    <Grid>
    <Box p={"50px"} display={"flex"} justifyContent={"center"} >
      <Typography variant='h3' color={"#CC3366"} >My Students</Typography>
    </Box>
    <Grid p={"30px"} bo >
      
    <Box
      sx={{
        display: 'flex',
        justifyContent:"center",
        flexWrap: 'wrap',
        
        '& > :not(style)': {
          m: 0,
          width: 728,
          height: 230,
          borderRadius:7,
          
        },
      }}
    >
       
      
      {/* Outer Paper with gray background */}
      <Paper elevation={5} sx={{ backgroundColor: "#D9D9D9" }}>
        {/* Inner Paper with white background */}
        <Paper elevation={0} sx={{ backgroundColor: 'white', p:"10px" }}>
          {/* Content of the inner paper */}
          {/* Add your content here */}
        </Paper>
      </Paper>
    </Box>

    </Grid>
    </Grid>
    </>
  )
}

export default TrainerBody