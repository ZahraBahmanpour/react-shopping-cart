import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const readData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${BASE_URL}/${url}`);
        setData(res.data);
      } catch (e) {
        console.log(e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    readData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
