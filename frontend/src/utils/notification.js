import { Store } from "react-notifications-component";

export const notification = {
  title: "Success !",
  message: "Successfull",
  autoClose: 1000,
  type: "success",
  insert: "top",
  container: "top-right",
  dismiss: {
    duration: 1000,
  },
  animationIn: ["animate__animated animate__flipInX"],
  animationOut: ["animate__animated animate__flipInX"],
}

export const notify = (props) => {
  Store.addNotification({
    ...notification,
    ...props
  });
}