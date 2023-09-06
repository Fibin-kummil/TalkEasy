import React, { useEffect, useState } from "react";
import AdminHeader from "../../admin/adminHeader";
import {
  Box,
  Card,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
// import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
// import Grid from '@mui/material/Grid';
import List from "@mui/material/List";
// import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { RequestedTrainer } from "../../../utils/api";
import ExpandMore from "@mui/icons-material/ExpandMore";

const cardStyle = {
  width: "100%",
  height: "auto",
  justifyContent: "space-evenly",
  color: "#CC3366",
  fontSize: "4vw",
  paddingTop: "2vw",
};

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

const TrainerManage = () => {
  // const navigate = useNavigate();
  const [open, setOpen] = useState(null);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const res = RequestedTrainer().then((res) => setLeft(res.data.data));
    console.log("a", left);
    // setLeft(res.data)
  }, []);

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        // avatar={
        //   <Checkbox
        //     onClick={handleToggleAll(items)}
        //     checked={numberOfChecked(items) === items.length && items.length !== 0}
        //     indeterminate={
        //       numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
        //     }
        //     disabled={items.length === 0}
        //     inputProps={{
        //       'aria-label': 'all items selected',
        //     }}
        //   />
        // }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
              <ListItem>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.name || "none"} />
                <Button
                  sx={{ paddingLeft: 9 }}
                  size="small"
                  onClick={() => setOpen(value)}
                >
                  {" "}
                  view
                </Button>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                
              </ListItem>
            </ListItem>
          );
        })}
      </List>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title"></DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      <Typography variant="h6" color="primary">
                        Details
                      </Typography>
                      Name: {open?.name} <br />
                      Email: {open?.email} <br />
                      Phone: {open?.phone}
                      {console.log("l",open)}
                      <Typography variant="h6" color="primary">
                        Certicates
                      </Typography>
                      {open?.certificate?.length && (
                        <>
                        <Stack spacing={2} direction="row" >
                          <img
                            src={`http://localhost:5000/uploads/${open?.certificate[0]}`}
                            alt="cert"
                          />
                          <img
                            src={`http://localhost:5000/uploads/${open?.certificate[1]}`}
                            alt="cert"
                          />
                          </Stack>
                        </>
                      )}
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} autoFocus>
                      Agree
                    </Button>
                  </DialogActions>
                </Dialog>
    </Card>
  );
  return (
    <>
      <Box display="flex" justifyContent="center" bgcolor="#c6c6c6">
        <AdminHeader />

        <Box maxHeight="100px">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              {/* <DirectionsRunIcon sx={{ fontSize: "2vw" }} style={cardStyle}  /> */}
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  display="flex"
                  justifyContent="center"
                >
                  Trainer Management
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        paddingTop="150px"
      >
        <Grid item>{customList("Requested Trainer", left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList("Trainer Available", right)}</Grid>
      </Grid>
    </>
  );
};

export default TrainerManage;
