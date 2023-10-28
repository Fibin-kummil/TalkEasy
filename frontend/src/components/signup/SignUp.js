import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { login } from "../../slices/UserSlice";
import { useDispatch } from "react-redux";
import Otp from "./Otp";
import { Register } from "../../utils/api";
import { Alert, Stack } from "@mui/material";

const defaultTheme = createTheme();

export default function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showOtp, setShow] = useState(false);
  const [enterOtp, setenterOtp] = useState();
  const [inputs, setInputs] = useState();

  // function handleCallbackResponse(response) {
  //   console.log("Encoded JWT ID token: " + response.credential);
  // }
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       "494404285312-vcar3kfe9g0nfc9q1gl9ktddm00p0hjj.apps.googleusercontent.com",
  //     callback: handleCallbackResponse,
  //   })

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "outline",
  //     size: "large",
  //   });
  // }, [])

  useEffect(() => {
    console.log(enterOtp, showOtp);
    if (parseInt(enterOtp) === showOtp) {
      Register(inputs)
        .then((res) => dispatch(login(res.data.user)))
        .then(() => navigate("/"))
        .catch((err) => console.log(err.message));
    }
  }, [enterOtp])

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      submit: null,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      name: Yup.string().max(255).required("Name is required"),
      phone: Yup.string()
        .test("phone", "Must be a valid phone number", (value) => {
          const phoneRegExp = /^[0-9]{10}$/;
          return phoneRegExp.test(value);
        })
        .required("Phone number is required"),
      password: Yup.string().max(255).required("Password is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log('otp fibin')
        const { email, name, phone, password } = values;
        setInputs({ email, name, phone, password });
        await axios
          .get(`${process.env.REACT_APP_baseURL}/sendOtp?mobile=${phone}`)
          .then((res) => setShow(res.data.otp));
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          {!showOtp ? (
            <Box sx={{ mt: 3 }}>
              <form noValidate onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.name && formik.errors.name)}
                    fullWidth
                    helperText={formik.touched.name && formik.errors.name}
                    label="Name"
                    name="name"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                    value={formik.values.email}
                  />
                  <TextField
                    error={!!(formik.touched.phone && formik.errors.phone)}
                    fullWidth
                    helperText={formik.touched.phone && formik.errors.phone}
                    label="Phone Number"
                    name="phone"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="text"
                    value={formik.values.phone}
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="password"
                    value={formik.values.password}
                  />
                </Stack>
                {formik.errors.submit && (
                  <Typography color="error" sx={{ mt: 3 }} variant="body2">
                    {formik.errors.submit}
                  </Typography>
                )}
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Continue
                </Button>
                <Box
                  paddingTop="10px"
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  variant="contained"
                >
                  <div id="signInDiv"></div>
                </Box>
                <Alert color="primary" severity="info" sx={{ mt: 3 }}>
                  <div>
                    *By confirming otp will be sent to your provided phone
                    number
                  </div>
                </Alert>
              </form>
            </Box>
          ) : (
            <Otp
              dispatch={setenterOtp}
              otp={enterOtp}
              phone={inputs.phone}
              setOtp={setShow}
            />
          )}
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
