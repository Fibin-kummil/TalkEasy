import axios from "axios";
import tryCatch from "./tryCatch";
import { notify } from "./notification";
import { date } from "yup";



export const Axios = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  withCredentials: true,
});



export const Login = tryCatch((data) =>Axios.post(`/login`, data))
export const Logout = tryCatch((data) =>Axios.post(`/logout`, data))
export const Register = tryCatch((data) => Axios.post(`/signup`, data))
export const profileUpdate = tryCatch((data) => Axios.post(`/profile_update`, data))
export const storeChooseLanguage = tryCatch((data) => Axios.post(`/language_choose`, data))

export const TrainerLogin = tryCatch((data) =>Axios.post(`/trainer/trainer_login`, data))
export const Disagree = tryCatch((data) => Axios.post(`/trainer/cancel_requiest`,data))
export const ApproveTrainer = tryCatch((data) => Axios.post(`/trainer/approve_trainer`,data))
export const CloseN = tryCatch((data) => Axios.post(`/trainer/close`,data))
export const TrainerDatas = tryCatch((data) => Axios.post(`/trainer/trainerData`,data))

export const RoomData = tryCatch((data) => Axios.post(`/Room/RoomData`,data))
export const ActiveRoom = tryCatch((data) => Axios.post(`/Room/roomActive`,data))
export const deleteMyRoom = tryCatch((data) => Axios.post(`/Room/deleteMyRoom`,data))


export const RequestedTrainer = tryCatch(() => Axios.get(`/trainer/requestedTrainer`))
export const ListTrainers = tryCatch(() => Axios.get(`/trainer/show_trainers`))

export const getRooms = tryCatch(() => Axios.get(`/Room/getRooms`))
// export const TrainerData = tryCatch((data) => Axios.post(`/trainerData`, data))
