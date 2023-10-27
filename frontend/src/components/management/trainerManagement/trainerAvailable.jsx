import React, { useEffect, useState } from "react";
import AdminHeader from "../../admin/adminHeader";
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Stack, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
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
import { AllTrainers, DelectTrainer} from "../../../utils/api";

const TrainerAvailable = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    { id: "population",label: "Phone No.",minWidth: 170,},
    { id: "density",label: "Details",minWidth: 170,},
    { id: "action",label: "Action",minWidth: 170,},
  ];

  const [Trainers, setTrainers] = useState([])
  const [open, setOpen] = useState(null)
  const [refresh, setrefresh] = useState(false)
  const [openDelect, setopenDelect] = useState(null)


  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  useEffect(() => {
    console.log("sss");
    let s = AllTrainers().then((res)=>setTrainers(res?.data?.data))
  }, [refresh])

  console.log("ttt",Trainers);

  const cancel = () => {
    // setrefresh(prev=>!prev)
    setopenDelect(false);
  }
   
  const delect = () =>{
    console.log(openDelect)
    DelectTrainer({email: openDelect.email})
    setopenDelect(false);
    setrefresh(true)
  }

  // console.log("jfdjhhf",open.email);

  const handleClose = () => {
    setOpen(false);
    setopenDelect(false)
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
                  Trainer Available
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
              
              {Trainers.map((row,index) => 
                <TableRow  role="checkbox" key={index}  >
                  
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell><Button variant="contained"onClick={() => setOpen(row)}>view</Button></TableCell>
                  <TableCell><Button variant="contained"color="error"onClick={() => setopenDelect(row)}>Delete</Button></TableCell>
                  <TableCell>
                     {/* <Button variant="contained" color="success"onClick={() => setOpen(row)}>view</Button>*/}
                  </TableCell>
                 
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Trainers?.length}
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
                {/* <Stack spacing={2} direction="column" >
                 <img
                    src={`${process.env.REACT_APP_imageURL}/uploads/${open?.certificate[0]}`}
                    alt="cert"
                  />
                  <img
                    src={`${process.env.REACT_APP_imageURL}/uploads/${open?.certificate[1]}`}
                    alt="cert"
                  />
                  
                </Stack> */}
              </>
            )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={cancel}>Disagree</Button>
          <Button onClick={agree} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDelect}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="h6" color="primary">
              Do you want to delect this one as a triner 
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Grid display={"flex"} justifyContent={"space-evenly"}>
          <DialogActions>
            <Button onClick={delect} variant="contained" color="success">
              Delect
            </Button>
            <Button onClick={cancel} variant="contained" color="error">
              cancel
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </>
  )
}

export default TrainerAvailable