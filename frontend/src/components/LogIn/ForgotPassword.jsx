import React from 'react'
import { Button, Icon, Stack, TextField, Typography } from "@mui/material";




const ForgotPassword = () => {
  return (
    <>
      <div>
        <Stack spacing={1} sx={{ mb: 3,display:"flex",justifyContent:"center",alignItems:"center",paddingTop:"190px" }}>
          
        <Typography variant="h4">Enter PhoneNumber</Typography>

         
          <TextField
            id="standard-multiline-static"
            rows={4}
            helperText="Phone Number"
            variant="standard"
            
            
          />
          <Button
            
            size="small"
            sx={{ mt: 3 }}
            type="button"
            variant="contained"
          >
            Send Otp
          </Button>
        </Stack>
      </div>
    </>
  )
}

export default ForgotPassword