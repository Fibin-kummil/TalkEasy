import {
  Box,
  Button,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MoveDown } from "@mui/icons-material";

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
    contents: [
      "Learn from the scratch ",
      "Day-to-day words",
      "Basic Words",
    ],
  },
  {
    name: "Beginner Level",
    contents: [
      "Learn from the scratch ",
      "Day-to-day words",
      "Basic Words",
    ],
  },
  {
    name: "Intermediate Level",
    contents: [
      "Learn from the scratch ",
      "Day-to-day words",
      "Basic Words",
    ],
  },
  {
    name: "Advance Level",
    contents: [
      "Learn from the scratch ",
      "Day-to-day words",
      "Basic Words",
    ],
  },
]

const CourseLevel = () => {
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


      </Grid>
    </>
  )
}

export default CourseLevel;


const CoursesOptions = () => {
  const onAction = (i) =>{
    // {courses.map((courses, i) => (
  }
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
  )
}
