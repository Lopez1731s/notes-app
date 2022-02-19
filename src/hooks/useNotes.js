import axios from "axios";
import { useEffect, useState } from "react";

const useNotes = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const refetch = () => {
    setTimeout(() => {
      const token = process.env.React_App_ACCESS_TOKEN;

      const header = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      axios
        .get(url, header)
        .then((response) => {
          setData(response.data.notes);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  };

  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);

      const token = process.env.React_App_ACCESS_TOKEN;

      const header = {
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      await axios
        .get(url, header)
        .then((response) => {
          setData(response.data.notes);
        })
        .catch((error) => {
          setError(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getNotes();
  }, [url]);

  return { data, loading, error, refetch };
};

export default useNotes;