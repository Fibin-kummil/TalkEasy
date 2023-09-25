import { CardMedia, Stack, Typography, Button,Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import SbscribePaper from "../../assets/images/Subscribe.jpg";
import { PaddingRounded } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Subscribe = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.up("xs"));

  const navigate = useNavigate()
  const store = useSelector((data) => data?.user);
  const onAction = () =>{
    {store?.isLoggedIn ? ( navigate("/subscription") ) : (navigate("/")) }
  }

  return (
    <>
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        marginBottom: "-16px", // Adjust as needed to account for scrollbar
      }}
    >
      <CardMedia
        
        component="img"
        height="170"
        image={SbscribePaper}
        alt="green iguana"
        sx={{
          width: "100%",
          padding:"auto",
          filter: "brightness(0.5)",
        }}
      />
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={isMediumScreen ? -8 : 2}
        direction={isMediumScreen ? "row" : "column"}
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          padding: theme.spacing(2),
          paddingLeft: { lg: "70px", xs: "9px", md: "10px" },
          overflow: "hidden", // Add this to prevent content overflow
        }}
      >
        <Stack
          direction="column"
          alignItems={isMediumScreen ? "flex-start" : "center"}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#fff",
              fontSize: isMediumScreen ? "30px" : "24px",
              textAlign: isMediumScreen ? "left" : "center",
              mb: isMediumScreen ? theme.spacing(2) : 0,
            }}
          >
            Do you want a communication Trainer?
          </Typography>
          <Box
            width={
              isMediumScreen
                ? "650px"
                : isSmallScreen
                ? "450px"
                : isExtraSmallScreen
                ? "100%"
                : "100%"
            }
          >
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontSize: isMediumScreen ? "15px" : "12px",
                textAlign: isMediumScreen ? "left" : "center",
              }}
            >
              Don’t fret! We are here to help you. Our expert trainers will
              help <br />
              you to improve your communication skill. Subscribe for a trainer.
            </Typography>
          </Box>
        </Stack>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#CC3366",
            fontSize: isMediumScreen ? "20px" : "16px",
            borderRadius: "10px",
          }}
          onClick={onAction}
        >
          SUBSCRIBE
        </Button>
      </Stack>
    </div>
    </>
  )
}

export default Subscribe


