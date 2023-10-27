import { Button, Icon, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Otp = ({ otp, dispatch, phone ,setOtp}) => {
  const [timer, setTimer] = useState(0)
  async function Timer() {
    await axios
      .get(`${process.env.REACT_APP_baseURL}/sendOtp?mobile=${phone}`)
      .then((res) => setOtp(res.data.otp));
    setTimer(10);
    var newtimer = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(newtimer);
          return 0; 
        }
        return prev - 1;
      });
    }, 1000);
  }
useEffect(() => {
  Timer()
}, [])

  return (
    <>
      <div>
        <Stack spacing={1} sx={{ mb: 3 }}>
          <Typography variant="h4">Verify OTP</Typography>
          <Typography color="text.secondary" variant="body2">
            OTP has been sent to{" "}
            <b>+91 XXXXXX{phone[6] + phone[7] + phone[8] + phone[9]}</b>.Please
            enter your OTP to complete &nbsp;registration process.
          </Typography>

          {/* <Typography color="error" sx={{ mb: 30 }} variant="body2">
            {"message"}
          </Typography> */}
          {timer ? (
            <Typography color="error" sx={{ mb: 30 }} variant="body2">
              Resend OTP in 00:{timer}
            </Typography>
          ) : (
            <Link
              onClick={() => Timer()}
              style={{ textDecoration: "none", color: "#1976D2" }}
              className="link"
            >
              Resend OTP
            </Link>
          )}
          <TextField
            id="standard-multiline-static"
            rows={4}
            helperText="Enter OTP"
            variant="standard"
            value={otp}
            onChange={(e) => dispatch(e.target.value)}
          />
          <Button
            fullWidth
            size="large"
            sx={{ mt: 3 }}
            type="button"
            variant="contained"
          >
            Continue
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default Otp;
