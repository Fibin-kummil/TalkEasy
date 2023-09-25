import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { RoomData } from "../../utils/api";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

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

const Rooms = ({ setdata,disable,setdisable }) => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const inirialState = {
    topic: "",
    maxPeople: "",
    language: "English",
    Level: "",
  };

  const [formData, setFormData] = useState(inirialState);

  const handleChange = (e) => {
    // console.log({
    //   ...formData,
    //   [e.target.name]: e.target.value,
    // });
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const userData = JSON.parse(localStorage.getItem('store')).user.userData
  

  console.log(userData);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.topic &&
      formData.maxPeople &&
      formData.language &&
      formData.Level
    ) {
      RoomData({
        ...formData,
        admin: userData._id,
        username:userData.name
      })
      console.log("Form data submitted:", formData);
      setdata({
        ...formData,
        admin: userData._id,
        username:userData.name
      }) //pass to parent 
      handleClose();
      setFormData(inirialState)
      setdisable(true) // to diable the create room button
      
    } else {
      alert("Please fill out all required fields.");
    }
  }

  return (
    <>
      <Grid
        container
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        p={"40px"}
      >
        <Typography variant="h2">Language Practice Community</Typography>
        <Stack spacing={5} direction="row" p={"40px"}>
          <Button variant="outlined" size="large" disabled={disable}  onClick={handleClickOpen}>
            +Create Room
          </Button>
          <Button
            variant="outlined"
            size="large"
            
          >
            Training Room
          </Button>
        </Stack>
      </Grid>

      <form onSubmit={handleSubmit}>
        <Dialog open={open} onClose={handleClose}>
          <Grid container direction={"column"}>
            <DialogActions>
              <DialogContent>
                <Stack spacing={2}>
                  <Stack direction={"row"}>
                    <TextField
                      id="outlined-basic"
                      label="Topics"
                      variant="outlined"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      required
                    />

                    <FormControl sx={{ minWidth: 220 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Maximum People
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Maximum People"
                        name="maxPeople"
                        value={formData.maxPeople}
                        onChange={handleChange}
                        required
                      >
                        {/* <MenuItem value={10}>1</MenuItem> */}
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                  <Stack spacing={3} maxWidth="500px" minWidth="100px">
                    <Autocomplete
                      multiple={false}
                      id="tags-filled"
                      value={formData.language}
                      onChange={(e, value) =>
                        setFormData({ ...formData, language: value })
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
                          id="outlined-basic"
                          label="Language"
                          variant="outlined"
                        />
                      )}
                      required
                    />

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Level
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Level"
                        name="Level"
                        value={formData.Level}
                        onChange={handleChange}
                        required
                      >
                        <MenuItem value={"Any Level"}>Any Level</MenuItem>
                        <MenuItem value={"Indermediate Level"}>
                          Indermediate Level
                        </MenuItem>
                        <MenuItem value={"Advance Level"}>
                          Advance Level
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </Stack>
              </DialogContent>
            </DialogActions>
            <Grid display={"flex"} justifyContent={"space-evenly"} pb={"10px"}>
              <Button variant="contained" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Create Group
              </Button>
            </Grid>
          </Grid>
        </Dialog>
      </form>
    </>
  );
};

export default Rooms;
