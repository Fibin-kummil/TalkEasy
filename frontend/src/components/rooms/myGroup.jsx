import {
  Avatar,
  Box,
  Card,
  Stack,
  Typography,
  CardContent,
  Button,
  Grid,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteMyRoom, getRooms } from "../../utils/api";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

const MyGroup = ({setData, data, setdisable  }) => {
  const [roomData, setRoomData] = useState([]);
  const [mygrp, setMygrp] = useState({})
  const navigate = useNavigate();
  const room = JSON.parse(localStorage.getItem("store"))?.user?.userData;
  console.log("store", room);

  useEffect(() => {
    getRooms().then((res) => {
      const grp = res?.data?.data.filter((user) => user.admin == room._id) //this will be a array
      grp.length && setMygrp({...grp[0]}); // spread this to make a object
      setRoomData(res?.data?.data.filter((user) => user.admin != room._id));
      grp.length && setdisable(true); //this is for if there is a admin room to make create button disable 
        });
  }, []);

  console.log("roomdata",roomData);


  const deleteRoom = () =>{
    const myGrp_id = mygrp?.admin || data?.admin
    deleteMyRoom({myGrp_id}).then((res)=>{
      setdisable(false)
      setMygrp({})
      setData({
        topic: "",
        maxPeople: "",
        language: "English",
        Level: "",
      })
    })
  }


  return (
    <>
      <Box pl={"80px"} pb={"30px"}>
        {mygrp?.admin || data?.admin ? (
          <>
            <Typography
              variant="h4"
              display={"flex"}
              justifyContent={"start"}
              p={"20px"}
            >
              My Group
            </Typography>

            <Card
              variant="outlined"
              sx={{
                width: "300px",
                height: "200px",
                backgroundColor: "lightgray",
              }}
            >
              <CardContent>
                <Grid display={"flex"} justifyContent={"end"} >
                <Button onClick={deleteRoom} >
                  <DeleteIcon />
                </Button>
                </Grid>

                <Typography variant="h6">
                  Room Name:- {data?.topic ?? mygrp?.topic}
                </Typography>
                <Typography>
                  {data?.language ?? mygrp?.language} (
                  {data?.Level ?? mygrp?.Level})
                </Typography>
                {/* <Typography>{data?.level ?? mygrp?.level}</Typography> */}
                <Stack direction="row" spacing={4}>
                  {/* {data.members>0?
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    {...stringAvatar("Kent Dodds")}
                  ></Avatar>:""} */}
                  {/* <Avatar
                    sx={{ width: 56, height: 56 }}
                    {...stringAvatar("D Dodds")}
                  ></Avatar>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    {...stringAvatar("M Kent ")}
                  ></Avatar>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    {...stringAvatar("M Kent ")}
                  ></Avatar> */}
                </Stack>

                <Grid p={"8px"} paddingLeft={"60px"}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "white", color: "black" }}
                    size="large"
                    onClick={() => navigate(`/joinMeeting?roomID=${room._id}`)}
                  >
                    Connect
                  </Button>
                </Grid>
              </CardContent>
            </Card>

            <Divider
              sx={{
                height: 40,
                m: 3.5,
                borderBottomWidth: 3,
                borderBottomStyle: "solid",
                borderBottomColor: "black",
              }}
              orientation="horizontal"
            />
          </>
        ) : (
          ""
        )}

        <Typography
          variant="h4"
          display={"flex"}
          justifyContent={"start"}
          p={"20px"}
        >
          Join to Random calls
        </Typography>
        <Grid pt={"40px"}>
          
            {roomData.map((data) =>
              data.isActive ? (
                <Card
                  variant="outlined"
                  sx={{
                    width: "300px",
                    height: "200px",
                    backgroundColor: "lightgray",
                  }}
                >
                  <Typography variant="h6">
                    join {data?.username} room
                  </Typography>
                  <CardContent>
                    <Typography>Room Name:- {data?.topic}</Typography>
                    {/* <Typography>{data?.language }</Typography> */}
                    <Typography>
                      {data?.language} ({data?.Level})
                    </Typography>
                    <Stack direction="row" spacing={4}>

                    
                    {data?.members?.map((member) => {
                      console.log(member.name); // Log the member's name
                      return (
                        <Avatar
                        key={member._id}
                        sx={{ width: 56, height: 56 }}
                        {...stringAvatar(member.name)}
                      >
                      </Avatar>
                      );
                    })}

                      {/* <Avatar
                        sx={{ width: 56, height: 56 }}
                        {...stringAvatar("Dodds")}
                      ></Avatar> */}
                      {/* <Avatar
                        sx={{ width: 56, height: 56 }}
                        {...stringAvatar("M Kent ")}
                      ></Avatar>
                      <Avatar
                        sx={{ width: 56, height: 56 }}
                        {...stringAvatar("Kent ")}
                      ></Avatar> */}
                    </Stack>

                    <Grid p={"30px"} paddingLeft={"60px"}>
                      <Button
                        variant="contained"
                        sx={{ backgroundColor: "white", color: "black" }}
                        size="large"
                        onClick={() =>
                          navigate(`/joinMeeting?roomID=${data.admin}`)
                        }
                      >
                        Connect
                      </Button>
                    </Grid>
                  </CardContent>
                </Card>
              ) : (
                ""
              )
            )}
          
        </Grid>
      </Box>
    </>
  );
};

export default MyGroup;

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
    },
    children: `${name.split('')[0]}`,
  };
}
