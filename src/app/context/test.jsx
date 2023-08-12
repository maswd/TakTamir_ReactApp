if (error.response.status === 403) {
    const res = await Swal.fire({
      title: "در انتظار تایید",
      text: "حساب کاربری شما هنوز تایید نشده است لطفا صبر کنید ! ",
      confirmButtonText: "خروج",
    });
    if (res) {
      history("/logout");
    }
  }


  