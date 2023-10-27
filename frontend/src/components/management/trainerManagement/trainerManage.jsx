import React, { useEffect, useState } from "react";
import AdminHeader from "../../admin/adminHeader";
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { ApproveTrainer, Disagree, RequestedTrainer } from "../../../utils/api";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../../../slices/UserSlice";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";



const TrainerManage = () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    { id: "population",label: "Phone No.",minWidth: 170,},
    { id: "density",label: "Details",minWidth: 170,},

  ];

  // function createData(name, code, population, size) {
  //   const density = population / size;
  //   return { name, code, population, size, density };
  // }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [left, setLeft] = useState([]);
  const [open, setOpen] = useState(null)
  const [refresh, setrefresh] = useState(false)

  useEffect(() => {
    const res = RequestedTrainer().then((res) => setLeft(res?.data?.data));

  }, [refresh]);


const cancel =() =>{
    Disagree(open)
    .then(() => dispatch(login()))
    .then(() => navigate("/trainerManage"))
    setrefresh(prev=>!prev)
    setOpen(false)
  }

  const agree = () =>{
      ApproveTrainer(open)
    .then(() => dispatch(login()))
    .then(() => navigate("/trainerManage"))
    setrefresh(prev=>!prev)
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="#c6c6c6"
        padding={"10px"}
      >
        {/* <AdminHeader /> */}

        <Box maxHeight="100px">
          <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  display="flex"
                  justifyContent="center"
                >
                  Requested Trainer
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Box>

      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    // align={column.align}
                    // style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              
              {left.map((row,index) => 
                <TableRow hover role="checkbox" key={index} >
                  
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                     <Button variant="contained" color="success"onClick={() => setOpen(row)}>view</Button>                  
                  </TableCell>
                 
                </TableRow>
              )} 
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={left.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>



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

          <Typography variant="h6" color="primary">
              Languages
            </Typography>
            {open?.language?.join(', ')}
          <Typography variant="h6" color="primary">
            Certificates
          </Typography>
          {open?.certificate?.length && (
              <>
                <Stack spacing={2} direction="column" >
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
          <Button onClick={cancel}>Disagree</Button>
          <Button onClick={agree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TrainerManage;