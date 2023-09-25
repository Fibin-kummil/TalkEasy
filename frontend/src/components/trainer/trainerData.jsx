import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Stack,
  Typography,
  Container,
  Button,
  TextField,
  Autocomplete,
  Chip,
  Input,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { TrainerDatas } from "../../utils/api";

const top100Films = [
  "Assamese",
  "Bengali",
  "Bodo",
  "Dogri",
  "English",
  "Gujarati",
  "Hindi",
  "Kannada",
  "Kashmiri",
  "Konkani",
  "Maithili",
  "Malayalam",
  "Marathi",
  "Meitei",
  "Nepali",
  "Odia",
  "Punjabi",
  "Sanskrit",
  "Santali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
];

const TrainerData = () => {
  const navigate = useNavigate();
  let a = JSON.parse(localStorage.getItem("store"))?.user?.userData;
  // console.log('1',a)
  const [data, setdata] = useState({ language: [], ...a });
  const change = (event) => {
    setdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.files[0],
    }));
  }

  function submit() {
    console.log(data);
    const formData = new FormData(); 
    for (const key in data) {
      if (data.hasOwnProperty(key) && key !== "image1" && key !== "image2") {
        formData.append(key, data[key]);
      }
    }
    formData.append("image1", data.image1, data?.image1?.name);
    formData.append("image2", data.image2, data?.image2?.name); // this cannot put in "if" because its a stored in a separate file as nexted document
    TrainerDatas(formData)
      .then(() => navigate("/"))
      .catch((err) => console.log(err.message));
  }

  const fileInputRef1 = React.useRef(null);
  const fileInputRef2 = React.useRef(null);

  const [value, setValue] = React.useState(0);
  const handleChangeTabs = ( event,newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container>
        <Container sx={{ minHeight: "100vh" }}>
          <Box sx={{ width: "100%", marginTop: "20px" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChangeTabs}
                aria-label="basic tabs example"
              >
                <Tab label="Details" />
              </Tabs>
            </Box>
          </Box>
          <Paper
            sx={{
              maxWidth: "1100px",
              width: "130%",
              margin: "auto",
              marginTop: "50px",
              padding: "20px",
              border: "1px solid #999",
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: "#1778F2",
                  fontWeight: "bold",
                  paddingLeft: "1px",
                }}
              >
                Basic Information
              </Typography>

              <Stack direction="row" spacing={15}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4} lg={2}>
                    <Typography
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      NAME:
                      <br /> {a?.name}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} lg={2}>
                    <Typography
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      EMAIL ADDRESS: <br /> {a?.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4} lg={3}>
                    <Typography
                      sx={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      PHONE NUMBER: <br /> {a?.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </Stack>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#1778F2",
                  fontWeight: "bold",
                }}
              >
                Add Certificate
              </Typography>

              <Stack direction="row" spacing={15}>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        "& > :not(style)": {
                          m: 1,
                          width: 300,
                          height: 200,
                          marginLeft: "60px",
                          border: "2px dashed gray",
                        },
                      }}
                    >
                      <Stack>
                        <Box
                          sx={{
                            width: 300,
                            height: 200,
                            cursor: "pointer",
                            backgroundColor: "#fff",
                            "&:hover": {
                              backgroundColor: "#fff",
                              opacity: [0.9, 0.8, 0.7],
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                          onClick={() => fileInputRef1.current.click()}
                        >
                          {data?.image1 ? (
                            <img
                              height={200}
                              width={300}
                              src={URL.createObjectURL(data.image1)}
                              alt=""
                            />
                          ) : (
                            <Button
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                color: "#1778F2",
                                fontWeight: "bold",
                              }}
                            >
                              Add
                            </Button>
                          )}
                          <input
                            hidden
                            ref={fileInputRef1}
                            name="image1"
                            onChange={change}
                            type="file"
                          />
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Box
                      sx={{
                        display: "flex",
                        "& > :not(style)": {
                          m: 1,
                          width: 300,
                          height: 200,
                          marginLeft: "60px",
                          border: "2px dashed gray",
                        },
                      }}
                    >
                      <Stack>
                        <Box
                          sx={{
                            width: 300,
                            height: 200,
                            cursor: "pointer",
                            backgroundColor: "#fff",
                            "&:hover": {
                              backgroundColor: "#fff",
                              opacity: [0.9, 0.8, 0.7],
                            },
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                          }}
                          onClick={() => fileInputRef2.current.click()}
                        >
                          <input
                            hidden
                            name="image2"
                            ref={fileInputRef2}
                            onChange={change}
                            type="file"
                          />
                          {data?.image2 ? (
                            <img
                              height={200}
                              width={300}
                              src={URL.createObjectURL(data.image2)}
                              alt=""
                            />
                          ) : (
                            <Button
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                height: "100%",
                                color: "#1778F2",
                                fontWeight: "bold",
                              }}
                            >
                              Add
                            </Button>
                          )}
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                </Grid>
              </Stack>
              <Typography
                sx={{
                  color: "#1778F2",
                  fontWeight: "bold",
                }}
              >
                Add Languages You Know
              </Typography>
              <Box paddingTop="30px" paddingLeft="85px">
                <Stack spacing={3} maxWidth="500px" minWidth="100px">
                  <Autocomplete
                    multiple
                    id="tags-filled"
                    value={data.language}
                    onChange={(e, value) =>
                      setdata({ ...data, language: value })
                    }
                    options={top100Films}
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="filled"
                        label="Add Language"
                        placeholder="Select Language"
                      />
                    )}
                  />
                </Stack>
              </Box>
            </Box>
            <Box display="flex" justifyContent="space-evenly" paddingTop="30px">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#CC3366",
                  fontSize: "16px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "end",
                }}
                onClick={submit}
              >
                SUBMIT
              </Button>
            </Box>
          </Paper>
        </Container>
      </Grid>
    </>
  );
};

export default TrainerData;
