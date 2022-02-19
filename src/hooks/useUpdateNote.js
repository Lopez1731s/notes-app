import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useUpdateNote = () => {
  const [postData, updateData] = useState({
    pending: false,
    data: undefined,
    error: undefined,
  });

  const execute = ({ data }) => {
    const token = process.env.React_App_ACCESS_TOKEN;
    const header = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    updateData({
      pending: true,
      data: undefined,
      error: undefined,
    });
    axios
      .post("https://api.m3o.com/v1/notes/Update", data, header)
      .then((response) => {
        updateData({
          pending: false,
          data: response.data,
          error: undefined,
        });

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Update successfully",
        });
      })
      .catch((err) => {
        updateData({
          pending: false,
          data: undefined,
          error: "error del api",
        });
      });
  };

  return { ...postData, execute };
};

export default useUpdateNote;
