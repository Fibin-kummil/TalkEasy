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
import { getRooms } from "../../utils/api";
import { useNavigate } from "react-router";
import DeleteIcon from "@mui/icons-material/Delete";

const MyGroup = ({ data, setdisable }) => {
  const [roomData, setRoomData] = useState([]);
  const [mygrp, setMygrp] = useState([{}]);
  const navigate = useNavigate();
  const room = JSON.parse(localStorage.getItem("store"))?.user?.userData;
  console.log("store", room);

  useEffect(() => {
    getRooms().then((res) => {
      setMygrp(res?.data?.data.filter((user) => user.admin == room._id));
      setRoomData(res?.data?.data.filter((user) => user.admin != room._id));
      // console.log("12",res.data.data[0].isActive);//jjjjjj
    });
  }, []);

  useEffect(() => {
    mygrp[0]?.admin && setdisable(true);
  }, [mygrp])

  const deleteRoom = () =>{
    
  }

  console.log("modifi", roomData[0]?.isActive);

  return (
    <>
      <Box pl={"80px"} pb={"30px"}>
        {mygrp.length || data?.admin ? (
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
                  Room Name:- {data?.topic ?? mygrp[0]?.topic}
                </Typography>
                <Typography>
                  {data?.language ?? mygrp[0]?.language} (
                  {data?.Level ?? mygrp[0]?.Level})
                </Typography>
                {/* <Typography>{data?.level ?? mygrp[0]?.level}</Typography> */}
                <Stack direction="row" spacing={4}>
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    {...stringAvatar("Kent Dodds")}
                  ></Avatar>
                  <Avatar
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
                  ></Avatar>
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
          <>
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
                      <Avatar
                        sx={{ width: 56, height: 56 }}
                        {...stringAvatar("Kent Dodds")}
                      ></Avatar>
                      <Avatar
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
                      ></Avatar>
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
          </>
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
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
