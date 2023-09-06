import React from 'react'
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";



function Footer() {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '40px',
    textAlign: 'center',
  };
  
  const textStyle = {
    fontFamily: 'Poppins',
    fontSize: '20px',
  };
  return (
    <Box sx={footerStyle}>
    <Typography sx={{ ...textStyle, paddingBottom: isExtraSmallScreen ? "10px" : "30px" }}>
      Quick Links
    </Typography>
    <Stack
      direction={isExtraSmallScreen ? "column" : "row"}
      sx={{
        justifyContent: isExtraSmallScreen ? "center" : "space-evenly",
        paddingBottom: isExtraSmallScreen ? "30px" : "50px",
      }}
    >
      <Typography>Home</Typography>
      <Typography>Course</Typography>
      <Typography>About</Typography>
      <Typography>Contact</Typography>
      <Typography>Review</Typography>
    </Stack>
    <Stack
      direction={isMediumScreen ? "column" : "row"}
      sx={{ justifyContent: isMediumScreen ? "center" : "space-between" }}
    >
      <Stack sx={{ justifyContent: isMediumScreen ? "center" : "flex-start" }}>
        <Typography>
          © 2023 Your Company Name. All rights reserved.
        </Typography>
      </Stack>
      <Stack
        direction={isMediumScreen ? "column" : "row"}
        spacing={isMediumScreen ? 0 : 2}
        sx={{ justifyContent: isMediumScreen ? "center" : "flex-end" }}
      >
        <Typography>Terms & conditions</Typography>
        <Typography>Privacy Policy</Typography>
      </Stack>
    </Stack>
  </Box>
  );
}

export default Footer
