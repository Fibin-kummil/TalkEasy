import { notify } from "./notification";

const tryCatch = (controller) => async (data) => {
  try {
    console.log('hi');
    const res = await controller(data);
    console.log(res);
    if (res) {
      if (res?.data?.message) {
        notify({ message: res?.data?.message })
      }
      return res;
    }
  } catch (error) {
    const errorMessage = error?.response?.data?.message || error.message;
    console.error("Error " + errorMessage);
    notify({ message: errorMessage, type: "danger", title: "Error !" });
    return;
  }
};
export default tryCatch;
