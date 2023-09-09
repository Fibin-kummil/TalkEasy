import axios from "axios";
import tryCatch from "./tryCatch";
import { notify } from "./notification";
import { date } from "yup";

const baseURL = "http://localhost:5000/api";
export const Axios = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

export const Login = tryCatch((data) =>Axios.post(`/login`, data))

export const Logout = tryCatch((data) =>Axios.post(`/logout`, data))

export const Register = tryCatch((data) => Axios.post(`/signup`, data))

export const TrainerDatas = tryCatch((data) => Axios.post(`/trainer/trainerData`,data))

export const RequestedTrainer = tryCatch((data) => Axios.get(`/trainer/requestedTrainer`,data))

export const Disagree = tryCatch((data) => Axios.post(`/trainer/cancel_requiest`,data))

export const CloseN = tryCatch((data) => 
// console.log('huuuud',data)
Axios.post(`/trainer/close`,data)
)


// export const TrainerData = tryCatch((data) => Axios.post(`/trainerData`, data))
