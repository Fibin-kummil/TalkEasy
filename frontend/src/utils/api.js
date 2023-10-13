import axios from "axios";
import tryCatch from "./tryCatch";
import { notify } from "./notification";


export const Axios = axios.create({
  baseURL: process.env.REACT_APP_baseURL,
  // signal: AbortSignal.timeout(10000),
  withCredentials: true, //to allow access to content inside request headers
});

Axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

Axios.interceptors.response.use(function (response) {
  if (response) {
    if (response?.data?.message) {
      notify({ message: response?.data?.message })
    }
    return response;
  }
}, function (error) {
  const errorMessage = error?.response?.data?.message || error.message;
  console.error("ErrorApi " + errorMessage);
  notify({ message: errorMessage, type: "danger", title: "Error !" });
  return Promise.reject(error);
}); 


export const Login = (data) =>Axios.post(`/login`, data )
export const Logout = (data) =>Axios.post(`/logout`, data) 
export const Register = (data) => Axios.post(`/signup`, data) 
export const profileUpdate = (data) => Axios.post(`/profile_update`, data)  
export const storeChooseLanguage = (data) => Axios.post(`/language_choose`, data) 
export const SearchTrainer = (data) => Axios.post(`/search_trainer`, data)   
export const TrainerLogin = (data) =>{
  console.log(data)
  return Axios.post(`/trainer/trainer_login`, data)
}
export const myStudent = (data) => Axios.post(`trainer/students`,data)
export const ChooseTainer = (data) => Axios.post(`trainer/choose_trainer`, data)
export const tainerProfileUpdate = (data) => Axios.post(`trainer/profile_update`, data)
export const Disagree = (data) => Axios.post(`/trainer/cancel_requiest`,data) 
export const ApproveTrainer = (data) => Axios.post(`/trainer/approve_trainer`,data) 
export const CloseN = (data) => Axios.post(`/trainer/close`,data) 
export const TrainerDatas = (data) => Axios.post(`/trainer/trainerData`,data) 
export const LogoutTrainer= (data) => Axios.post(`/trainer/logout`,data) 
export const RoomData = (data) => Axios.post(`/Room/RoomData`,data) 
export const ActiveRoom = (data) => Axios.post(`/Room/roomActive`,data) 
export const deleteMyRoom = (data) => Axios.post(`/Room/deleteMyRoom`,data) 
export const BlockUsers = (data) => Axios.post(`/admin/blockUsers`,data) 
export const DelectTrainer = (data) => Axios.post(`/admin/delectTrainer`,data) 
export const adminLogout = (data) => Axios.post(`/admin/admin_logout`,data) 
export const adminProfileUpdate = (data) => Axios.post(`admin/profile_update`, data)


export const AllUsers = () => Axios.get(`/admin/allUsers`) 
export const AllTrainers = () => Axios.get(`/admin/allTrainer`) 
export const RequestedTrainer = () => Axios.get(`/trainer/requestedTrainer`) 
export const ListTrainers = () => Axios.get(`/trainer/show_trainers`) 
export const getRooms = () => Axios.get(`/Room/getRooms`) 


// export const TrainerData = (data) => Axios.post(`/trainerData`, data) 
