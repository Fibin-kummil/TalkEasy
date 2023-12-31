import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from '../footer/Footer'
import { Box, Button, Grid, Pagination, Paper, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ChooseTainer, ListTrainers, SearchTrainer } from "../../utils/api";
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router";

  
const TrainerList = () => {
  
  const [data, setData] = useState([])

  const [searchField, setSearchField] = useState("");

  const [currentPage, setCurrentPage] = useState(1)

  const [count, setCount] = useState()

  const [select,setSelect] = useState(null) 
  console.log("456",count);

  const navigate = useNavigate()

  
  let currentUser = JSON.parse(localStorage.getItem("store"))?.user?.userData;
  console.log("/sddd",currentUser.email);
  // console.log("sjhhbdhb",data);
  

  const handleChange = e => {
    setSearchField(e.target.value);
  };
  

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

   
  useEffect(() => {
     SearchTrainer({searchField,currentPage,UserEmail:currentUser.email}).then(res=>{
       setData(res?.data?.data)
       setCount(res.data.count)
       setCurrentPage(prev=>Math.ceil(res?.data?.count / 3) < currentPage ? 1 : prev)
     })
  },[searchField,currentPage])

  const selectTrainer = (x) =>{
    ChooseTainer({
      TrainerEmail:x.email
      ,UserEmail:currentUser.email
    })
    .then(res=>navigate("/rooms"))
  }



  return (
    <>
      <Header />
      <Typography variant="h2" display={"flex"} justifyContent={"center"}>Select Trainer</Typography>

      <Box display={"flex"} justifyContent={"center"} direction={"row"} >
        <TextField label="search Trainer here" onChange = {handleChange}/>
      </Box>

      <Grid container spacing={8} p={5}>

        {data.map((x,index) =>
          (
          
          <Grid item xs={12} sm={6} md={6} lg={4} key={index}>
            <Paper sx={{width:"100%"}}  >
            <Grid
              container
              direction={"column"}
              p={4}
              spacing={{ xs: 2, lg: 2, md: 0, sm: 2 }}
              
              overflow={"hidden"}
            >
              <Grid item>
                <Grid container spacing={4} justifyContent={"space-between"}>
                  <Grid item>
                    <Grid container direction={"column"}>
                      <Grid item>
                        <Typography variant="h4" fontWeight={700}>
                          {x.name}
                        </Typography>
                      </Grid>
                      <Grid item container direction={"column"}>
                  
                        <Grid item>
                          <LocationOnIcon />
                          Tvm,Kerala,India
                        </Grid>
                        <Grid item >
                          <CalendarTodayIcon /> Tutor Since 2022
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item display={"flex"} alignItems={"center"}>
                  <Avatar
                       
                        {...stringAvatar(x.name)}
                         
                      >
                      </Avatar>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Typography variant="p">
                  welcom Avatars are found throughout material design with uses
                  in everything from tables to dialog menus
                </Typography>
              </Grid>
              <Grid item mb={3}>
                <Grid container direction={"column"} spacing={1}>
                  <Grid item>
                    <Typography variant="h6" fontWeight={600}>
                      Highlights
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Card sx={{ backgroundColor: "lightgray", width: "300px" }}>
                      <Typography>100+ Chats</Typography>
                      <Typography>Certified Teacher</Typography>
                    </Card>
                  </Grid>
                  <Grid item display={"flex"} justifyContent={"center"}>
                    <Button variant="contained" fullWidth onClick={()=>selectTrainer(x)}>
                      Select
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            </Paper> 
          </Grid>
))}
      </Grid>

      <Grid display={"flex"} justifyContent={"center"}>
      <Pagination count={Math.ceil(count/3)} size="large" color="secondary"
       onChange = {handlePageChange}
       />
      </Grid >

      <Footer/>
    </>
  );
};

export default TrainerList;


function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  console.log(name)
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 84, height: 84,fontSize: "4rem"
    },
    children: `${name.split('')[0]}`,
  };
}
