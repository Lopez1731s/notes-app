import axios from "axios";
import Swal from "sweetalert2";

const useDeleteNote = () => {
  const exect = ({ data }) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        const token = process.env.React_App_ACCESS_TOKEN;

        const header = {
          headers: {
            Authorization: "Bearer " + token,
          },
        };

        axios
          .post("https://api.m3o.com/v1/notes/Delete", data, header)
          .then((response) => {})
          .catch((err) => {});
        Swal.fire("Deleted!", "Your note has been deleted.", "success");
      }
    });
  };
  return { exect };
};

export default useDeleteNote;
