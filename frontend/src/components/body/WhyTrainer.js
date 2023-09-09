import React from "react";
import { Box, CardContent, Grid, Stack } from "@mui/material";
import { Typography, Card } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import VideocamIcon from "@mui/icons-material/Videocam";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {IconButton,} from "@mui/material";



const items = [
  {
    icon: <WatchLaterIcon />,
    title: "Flexible Timings",
    contents: [
      "Can learn in your free time",
      "Speaking Room Training",
      "Can dfgs your free time",
    ],
  },
  {
    icon: <VideocamIcon />,
    title: "Other Benefits",
    contents: [
      "1 to 1 Training for all ",
      "vedio conferance for better ",
      "more effecent lerning",
    ],
  },
];

const cardStyle = {
  width: "100%",
  height: "auto",
  justifyContent: "space-evenly",
  color: "#CC3366",
  fontSize: "4vw",
  paddingTop: "2vw",
  

  // boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.9)'
};
const WhyTrainer = () => {
  return (
    <>
    <Grid container direction={"column"} >
      <Stack
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        spacing={1}
        direction="row"
      >
        <h1>Why Choose A </h1>
        <Stack color="#CC3366">
          <h1>Trainer</h1>
        </Stack>
        <h1>?</h1>
      </Stack>

      <Grid
        container
        // spacing={5}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 500,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 2,
          }}
        >
          {/* <Cards /> */}
          {items.map((item, index) => (
        <Stack spacing={7} key={index}>
        <Card >
          <CardContent >
            <Stack spacing={4}>
              <IconButton style={cardStyle}>
                {React.cloneElement(item.icon, { sx: { fontSize: "50px" } })}
              </IconButton>
            </Stack>

            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: "900",
                fontSize: "20px",
                paddingBottom: "30px",
              }}
              level="title-md"
            >
              {item.title}
            </Typography>
            <Stack
              sx={{
                display: "flex",
                padding: { md: 0, xs: 4, sm: 0, lg: 0 },
                justifyContent: "center",
              }}
            >
              {item.contents.map((e,index) => (
                <Stack direction={"row"} spacing={2} key={index}>
                  <CheckCircleIcon
                    sx={{ color: "#75F94C", fontSize: "30px" }}
                  />
                  <Typography level="title-md" sx={{ fontSize: "20px" }}>
                    {e}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </CardContent>
        </Card>
        </Stack>
      ))}
        </Box>
      </Grid>
      </Grid>
    </>
  );
};

export default WhyTrainer;
