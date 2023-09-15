import {
  Box,
  Button,
  Grid,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MoveDown } from "@mui/icons-material";
import { useNavigate } from "react-router";

const item = [
  {
    name: "Pre-Basic Level",
  },
  {
    name: "Beginner Level",
  },
  {
    name: "Intermediate Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
  {
    name: "Advance Level",
  },
];

const courses = [
  {
    name: "Pre-Basic Level",
    contents: ["Learn from the scratch ", "Day-to-day words", "Basic Words"],
  },
  {
    name: "Beginner Level",
    contents: ["Learn from the scratch ", "Day-to-day words", "Basic Words"],
  },
  {
    name: "Intermediate Level",
    contents: ["Learn from the scratch ", "Day-to-day words", "Basic Words"],
  },
  {
    name: "Advance Level",
    contents: ["Learn from the scratch ", "Day-to-day words", "Basic Words"],
  },
];

const CourseLevel = () => {
  const navigate = useNavigate()
  const handleClick = () => navigate("/rooms")
  


  const { breakpoints } = useTheme();
  const lg = useMediaQuery(breakpoints.up("md"));
  

  return (
    <>
      <Grid>
        <Typography
          fontSize={{ xs: "20px", lg: "40px" }}
          variant="h4"
          fontWeight={700}
          display="flex"
          justifyContent="center"
          p="30px"
          whiteSpace="nowrap"
        >
          Course Levels & Features
        </Typography>

        {lg ? (
          <Grid container spacing={2} pb="20px">
            {item.map((item, i) => (
              <Grid 
                key={i}
                item
                sx={{ display: "flex", justifyContent: "center" }}
                xs={12}
                sm={6}
                md={3}
                lg={3}
              >
                <Button
                  variant={i < 4 ? "contained" : "outlined"}
                  size="large"
                  sx={{
                    padding: "15px",
                    width: "240px",
                    display: "flex",
                    justifyContent: i < 4 && !lg ? "space-between" : "center",
                  }}
                >
                  {item.name}
                  {i < 4 ? (
                    <Hidden mdUp>
                      <KeyboardArrowDownIcon />
                    </Hidden>
                  ) : (
                    ""
                  )}
                </Button>
              </Grid>
            ))}
          </Grid>
        ) : (
          <CoursesOptions />
        )}

        <Grid
        container
          p="20px"
          direction="column"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          // xs={4}
          // sm={6}
          // md={3}
          // lg={3}
        >
          <Typography variant="h3" fontWeight={700}>
            ONCE YOU COMPLETE THE COURSE, YOU’LL EXPERIENCE
          </Typography>
          <Typography variant="h3" style={{ textDecoration: "underline" }}>
            opportunity to learn Your dream language
          </Typography>
          <Typography variant="h4" color="#CC3366">
            communicate with any language
          </Typography>
        </Grid>

        <Stack
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={"20px"}
          spacing={1}
        >
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "20px", backgroundColor: "#CC3366" }}
            onClick={handleClick}
          >
            Free For Talk
          </Button>
          <Typography variant="h5">click here</Typography>
        </Stack>

        

      </Grid>
    </>
  );
};

export default CourseLevel;

const CoursesOptions = () => {
  const onAction = (i) => {
    // {courses.map((courses, i) => (
  };
  return (
    <>
      <Grid container spacing={2} pb="20px">
        {courses.map((courses, i) => (
          <Grid
            key={i}
            item
            sx={{ display: "flex", justifyContent: "center" }}
            xs={12}
            sm={6}
            md={3}
            lg={3}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                padding: "15px",
                width: "240px",
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={onAction}
            >
              {courses.name}
              <KeyboardArrowDownIcon />
            </Button>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
