import React, { useEffect, useState } from "react";
import AdminHeader from "../../admin/adminHeader";
import {
  Box,
  Button,
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
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import {
  AllUsers,
  ApproveTrainer,
  BlockUsers,
  Disagree,
  RequestedTrainer,
} from "../../../utils/api";
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

const Users = () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    { id: "population", label: "Phone No.", minWidth: 170 },
    { id: "density", label: "Details", minWidth: 170 },
  ];

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Users, setUsers] = useState([]);
  const [open, setOpen] = useState(null);
  // const [refresh, setrefresh] = useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [blocked, setblocked] = useState(true)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    AllUsers().then((res) => setUsers(res?.data?.data));
    console.log("789");
  }, [blocked])

  const cancel = () => {
    // setrefresh(prev=>!prev)
    setOpen(false);
  };

  const block = () => {
    BlockUsers({ email: open.email,block:!open.block });
    setblocked(prev=>!prev)
    // setrefresh(prev=>!prev)
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
 
  // console.log("ppp",open);

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
                  Users
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
              {Users.map((row, index) => (
                <TableRow hover role="checkbox" key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    {row.block ? (
                      <Button variant="contained" color="success" onClick={()=>setOpen(row)} >
                        Unblock
                      </Button>
                    ) : (
                      <Button variant="contained" color="error" onClick={()=>setOpen(row)}>
                        Block
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Users.length}
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
              Do you want to block the user
            </Typography>
          </DialogContentText>
        </DialogContent>
        <Grid display={"flex"} justifyContent={"space-evenly"}>
          <DialogActions>
            <Button onClick={block} variant="contained" color="success">
              ok
            </Button>
            <Button onClick={cancel} variant="contained" color="error">
              cancel
            </Button>
          </DialogActions>
        </Grid>
      </Dialog>
    </>
  );
};

export default Users;
