import React, { useRef, useState } from "react";
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
  TextField,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useEffect } from "react";
import { myStudent } from "../../utils/api";
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
// import "./students.css"

const Students = () => {
  const [Student, setStudent] = useState([]);
  const [open, setOpen] = useState(false);
  //
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTodo = () => {
    if (todo.trim()) {
      const isDuplicate = todos.find((item) => item.list === todo.trim());
      console.log(isDuplicate);
      if (!isDuplicate) {
        setTodos([
          ...todos,
          { list: todo.trim(), id: Date.now(), status: false },
        ]);
        setTodo("");
      }
    }

    if (editId) {
      const editTodo = todos.find((todo) => todo.id === editId);
      const updateTodo = todos.map((to) =>
        to.id === editTodo.id
          ? (to = { id: to.id, list: todo })
          : (to = { id: to.id, list: to.list })
      );
      setTodos(updateTodo);
      setEditId(0);
      setTodo("");
    }
  };

  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onComplete = (id) => {
    let complete = todos.map((list) => {
      if (list.id === id) {
        return { ...list, status: !list.status };
      }
      return list;
    });
    setTodos(complete);
  };

  const onEdit = (id) => {
    const editTodo = todos.find((list) => list.id === id);
    setTodo(editTodo.list);
    setEditId(editTodo.id);
  };
  //

  const columns = [
    { id: "name", label: "Name", minWidth: 170 },
    { id: "code", label: "Email", minWidth: 100 },
    { id: "population", label: "Phone No.", minWidth: 170 },
    { id: "density", label: "Feedback", minWidth: 170 },
  ];

  let TrainerEmail = useSelector((data) => data.user.userData.user);
  console.log(TrainerEmail.email);

  useEffect(() => {
    myStudent({ email: TrainerEmail.email }).then((res) =>
      setStudent(res.data.data)
    );
    console.log("ok", Student);
  }, []);

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
                  My Students
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
              {Student.map((row, index) => (
                <TableRow hover role="checkbox" key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setOpen(row)}
                    >
                      view
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={Users.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Paper>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title"></DialogTitle>
        <DialogTitle id="alert-dialog-title" display={"flex"} justifyContent={"center"}>{"Feedback"}</DialogTitle>
        {/* <h2 className="h2">Feed</h2> */}
        <form className="form-group" onSubmit={handleSubmit}>
          <TextField
          size="small"
            type="text"
            value={todo}
            ref={inputRef}
            placeholder="enter your todo"
            className="form-control"
            onChange={(event) => setTodo(event.target.value)}
          />
          <Button
            sx={{
              backgroundColor: "#5cb85c",
              color: "white",
              "&:hover": {
                backgroundColor: "#5cb85c",
                color: "white",
              },
            }}
            onClick={addTodo}
          >
            {editId ? "EDIT" : "ADD"}
          </Button>
        </form>
        <div className="list">
          <ul>
            {todos.map((todo) => (
              <li className="list-items" >
                <div
                  className="list-item-list"
                  id={todo.status ? "list-item" : ""}
                >
                  {todo.list}
                </div>
                <span>
                  <IoMdDoneAll
                    className="list-item-icons"
                    id="complete"
                    title="complete"
                    onClick={() => onComplete(todo.id)}
                  />
                  <FiEdit
                    className="list-item-icons"
                    id="edit"
                    title="Edit"
                    onClick={() => onEdit(todo.id)}
                  />
                  <MdDelete
                    className="list-item-icons"
                    id="delete"
                    title="Delete"
                    onClick={() => onDelete(todo.id)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Dialog>
    </>
  );
};

export default Students;
