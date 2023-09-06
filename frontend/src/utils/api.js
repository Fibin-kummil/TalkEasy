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

export const Register = tryCatch((data) => Axios.post(`/signup`, data))

export const TrainerDatas = tryCatch((data) => Axios.post(`/trainer/trainerData`,data))


export const RequestedTrainer = tryCatch((data) => Axios.get(`/trainer/requestedTrainer`,data))


// export const TrainerData = tryCatch((data) => Axios.post(`/trainerData`, data))
