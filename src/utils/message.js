import { toast } from "react-toastify"
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