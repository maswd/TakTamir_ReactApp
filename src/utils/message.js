import { toast } from "react-toastify"
import Swal from "sweetalert2"
export const successMessage = message => {
    toast.success(message, {
        position: "top-right",
        direction: "rtl",
        closeOnClick: true,

    })
}
export const errorMessage = message => {
    toast.error(message, {
        position: "top-right",
        direction: "rtl",
        closeOnClick: true,

    })
}
export function confirmMessage(title, text, confirmButtonText, cancelButtonText) {
    return new Promise((resolve, reject) => {
      Swal.fire({
        title: "!",
        text: "ایا مطمئن هستید ؟",
        showCancelButton: true,
        confirmButtonText: "بله ",
        cancelButtonText: "لغو",
      }).then((result) => {
        if (result.isConfirmed) {
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }
