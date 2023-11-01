import {
  Stack,
  Typography,
  Box,
  Button,
} from "@mui/material";
import React from "react";
import HomeBottam from "../../assets/images/HomeBottam.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Cards = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/trainerData");
  };
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));

  const store = useSelector((data) => data?.user);

  return (
    <>
      <Stack
        direction="column"
        spacing={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        paddingBottom="20px"
      >
        {/* <Box paddingTop="30px" paddingLeft="10px">
          <img src={HomeBottam} alt="HomeBottam" />
        </Box> */}
        {store.isLoggedIn ? (
          <Box>
            <Typography
              variant="h4"
              sx={{
                whiteSpace: "nowrap",
                fontWeight: "600",
                paddingLeft: "10px",
              }}
            >
              Do you want to become a Trainer?
            </Typography>
          </Box>
          // ''
        ) : (
          ""
        )}
        {store.isLoggedIn ? (
          <Box paddingLeft="10px">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CC3366",
                fontSize: isMediumScreen ? "20px" : "16px",
                borderRadius: "10px",
              }}
              onClick={handleClick}
            >
              JOIN
            </Button>
          </Box>
        ) : (
          ""
        )}
      </Stack>
    </>
  );
};

export default Cards;
