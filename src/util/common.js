import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const toast = {
  info(message) {
    Toastify({
      text: message,
      duration: 1000,
      gravity: "top",
      position: "right",
      style: {
        background: "#03a9f4",
      },
    }).showToast();
  },
  success(message) {
    Toastify({
      text: message,
      duration: 1000,
      gravity: "top",
      position: "right",
      style: {
        background: "#4caf50",
      },
    }).showToast();
  },
  error(message) {
    Toastify({
      text: message,
      duration: 1000,
      gravity: "top",
      position: "right",
      style: {
        background: "#ef5350",
      },
    }).showToast();
  },
};
