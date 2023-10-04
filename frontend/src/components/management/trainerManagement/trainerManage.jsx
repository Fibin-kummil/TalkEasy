import React, { useEffect, useState } from "react";
import AdminHeader from "../../admin/adminHeader";
import { Box, Card, Typography } from "@mui/material";

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

// function not(a, b) {
//   return a.filter((value) => b.indexOf(value) === -1);
// }

// function intersection(a, b) {
//   return a.filter((value) => b.indexOf(value) !== -1);
// }

// function union(a, b) {
//   return [...a, ...not(b, a)];
// }

// const [open, setOpen] = useState(null)
// const [refresh, setrefresh] = useState(false)

// const cancel =() =>{
//     Disagree(open)
//     .then(() => dispatch(login()))
//     .then(() => navigate("/trainerManage"))
//     setrefresh(prev=>!prev)
//     setOpen(false)
//   }

//   const agree = () =>{
//       ApproveTrainer(open)
//     .then(() => dispatch(login()))
//     .then(() => navigate("/trainerManage"))
//     setrefresh(prev=>!prev)
//     setOpen(false)
//   }

//   const handleClose = () => {
//     setOpen(false);
//   };

// const [checked, setChecked] = useState([]);
// const [right, setRight] = useState([4, 5, 6, 7]);

// const leftChecked = intersection(checked, left);
// const rightChecked = intersection(checked, right);

// const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//         newChecked.push(value);
//       } else {
//           newChecked.splice(currentIndex, 1);
//         }

//         setChecked(newChecked);
//       };

//       const numberOfChecked = (items) => intersection(checked, items).length;

//       const handleToggleAll = (items) => () => {
//           if (numberOfChecked(items) === items.length) {
//               setChecked(not(checked, items));
//             } else {
//                 setChecked(union(checked, items));
//               }
//             };

//             const handleCheckedRight = () => {
//                 setRight(right.concat(leftChecked));
//   setLeft(not(left, leftChecked));
//   setChecked(not(checked, leftChecked));
// };

// const handleCheckedLeft = () => {
//     setLeft(left.concat(rightChecked));
//     setRight(not(right, rightChecked));
//     setChecked(not(checked, rightChecked));
//   };

//   const customList = (title, items) => (
//       <Card>
//         <CardHeader
//           sx={{ px: 2, py: 1 }}
//           // avatar={
//             //   <Checkbox
//             //     onClick={handleToggleAll(items)}
//             //     checked={numberOfChecked(items) === items.length && items.length !== 0}
//             //     indeterminate={
//               //       numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0
//               //     }
//               //     disabled={items.length === 0}
//               //     inputProps={{
//                 //       'aria-label': 'all items selected',
//                 //     }}
//                 //   />
//                 // }
//                 title={title}
//                 subheader={`${numberOfChecked(items)}/${items.length} selected`}
//               />
//               <Divider />
//               <List
//                 sx={{
//         width: 200,
//         height: 230,
//         bgcolor: "background.paper",
//         overflow: "auto",
//       }}
//       dense
//       component="div"
//       role="list"
//     >
//       {items.map((value) => {
//           const labelId = `transfer-list-all-item-${value}-label`;

//           return (
//               <ListItem key={value} role="listitem" onClick={handleToggle(value)}>
//                 <ListItem>
//                   <ListItemIcon>
//                     <Checkbox
//                       checked={checked.indexOf(value) !== -1}
//                       tabIndex={-1}
//                       disableRipple
//                       inputProps={{
//                           "aria-labelledby": labelId,
//                         }}
//                       />
//                     </ListItemIcon>
//                     <ListItemText id={labelId} primary={value.name || "none"} />
//                     <Button
//                       sx={{ paddingLeft: 9 }}
//                       size="small"
//                       onClick={() => setOpen(value)}
//                     >
//                       {" "}
//                       view
//                     </Button>
//                     {/* <Button onClick={handleOpen}>Open modal</Button> */}
//                   </ListItem>
//                 </ListItem>
//         );
//       })}
//     </List>
//     <Dialog
//       open={open}
//       onClose={handleClose}
//       aria-labelledby="alert-dialog-title"
//       aria-describedby="alert-dialog-description"
//     >
//       <DialogTitle id="alert-dialog-title"></DialogTitle>
//       <DialogContent>
//         <DialogContentText id="alert-dialog-description">
//           <Typography variant="h6" color="primary">
//             Details
//           </Typography>
//           Name: {open?.name} <br />
//           Email: {open?.email} <br />
//           Phone: {open?.phone}

//           <Typography variant="h6" color="primary">
//             Certificates
//           </Typography>
//           {open?.certificate?.length && (
//               <>
//                 <Stack spacing={2} direction="row">
//                   <img
//                     src={`http://localhost:5000/uploads/${open?.certificate[0]}`}
//                     alt="cert"
//                   />
//                   <img
//                     src={`http://localhost:5000/uploads/${open?.certificate[1]}`}
//                     alt="cert"
//                   />
//                 </Stack>
//               </>
//             )}
//             <Typography variant="h6" color="primary">
//               Languages
//             </Typography>
//             {open?.language?.join(', ')}

//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={cancel}>Disagree</Button>
//           <Button onClick={agree} autoFocus>
//             Agree
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Card>
//   );

//    <Grid
//     container
//     spacing={2}
//     justifyContent="center"
//     alignItems="center"
//     paddingTop="150px"
//   >
//     <Grid item>{customList("Requested Trainer", left)}</Grid>
//     <Grid item>
//       <Grid container direction="column" alignItems="center">
//         <Button
//           sx={{ my: 0.5 }}
//           variant="outlined"
//           size="small"
//           onClick={handleCheckedRight}
//           disabled={leftChecked.length === 0}
//           aria-label="move selected right"
//         >
//           &gt;
//         </Button>
//         <Button
//           sx={{ my: 0.5 }}
//           variant="outlined"
//           size="small"
//           onClick={handleCheckedLeft}
//           disabled={rightChecked.length === 0}
//           aria-label="move selected left"
//         >
//           &lt;
//         </Button>
//       </Grid>
//     </Grid>
//     <Grid item>{customList("Trainer Available", right)}</Grid>
//   </Grid>

const TrainerManage = () => {
  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    {
      id: "population",
      label: "Phone No.",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    //   {
    //     id: 'size',
    //     label: 'Size\u00a0(km\u00b2)',
    //   minWidth: 170,
    //   align: 'right',
    //   format: (value) => value.toLocaleString('en-US'),
    // },
    {
      id: "density",
      label: "Action",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData("India", "IN", 1324171354, 3287263),
    createData("China", "CN", 1403500365, 9596961),
    createData("Italy", "IT", 60483973, 301340),
    createData("United States", "US", 327167434, 9833520),
    createData("Canada", "CA", 37602103, 9984670),
    createData("Australia", "AU", 25475400, 7692024),
    createData("Germany", "DE", 83019200, 357578),
    createData("Ireland", "IE", 4857000, 70273),
    createData("Mexico", "MX", 126577691, 1972550),
    createData("Japan", "JP", 126317000, 377973),
    createData("France", "FR", 67022000, 640679),
    createData("United Kingdom", "GB", 67545757, 242495),
    createData("Russia", "RU", 146793744, 17098246),
    createData("Nigeria", "NG", 200962417, 923768),
    createData("Brazil", "BR", 210147125, 8515767),
  ];

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
  const [left, setLeft] = useState();

  useEffect(() => {
    const res = RequestedTrainer().then((res) => setLeft(res.data.data));
    console.log("a", left);
    // setLeft(res.data)
    // console.log(refresh);
  }, []);

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        bgcolor="#c6c6c6"
        padding={"10px"}
      >
        <AdminHeader />

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
                  Trainer Management
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
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {left && Array.isArray(left)?
                 (left.map((row) => {
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      <TableCell>{row.name}</TableCell>
                    </TableRow>;
                  }))
                : ("")}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          // count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default TrainerManage;
