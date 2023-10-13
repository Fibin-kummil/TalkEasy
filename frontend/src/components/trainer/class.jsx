import { Button, Grid, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { myStudent } from '../../utils/api';
import { useSelector } from 'react-redux';

const Class = () => {

  const [Student, setStudent] = useState([]);


  let TrainerEmail = useSelector((data) => data.user.userData.user);
  console.log(TrainerEmail.email);

  useEffect(() => {
    myStudent({ email: TrainerEmail.email }).then((res) =>
      setStudent(res.data.data)
    );
    console.log("ok", Student);
  }, []);
  return (
    <>
 <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'lightgray' }}>
   <Typography display={"flex"} justifyContent={"center"} variant='h5'>My Students</Typography>
     <ListItem alignItems="center">
        {/* <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar> */}
          {Student.map((row, index) => (
           <ListItemText key={index}  >
            
            <Stack direction={"column"}>
            <ul>
              <li>
              {row.name}
              </li>
            </ul>
            </Stack>
            </ListItemText>
            
            ))}
      </ListItem>
      <Divider variant="inset" component="li" />
      <Grid display={"flex"} justifyContent={"center"}>
      <Button sx={{backgroundColor:"red", color:"black"}}  >Start Class</Button>
      </Grid>
      </List>
    </>
  )
}

export default Class