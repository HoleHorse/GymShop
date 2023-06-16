import { useAppDispatch } from "./redux";
import { setItems } from "../store/itemsSlice";
import { useEffect, useState } from "react";

function useFetchItems() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("http://localhost:5000/items", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(setItems(data));
      })
      .catch(() => {
        setError("Our service is currently unavailable");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { error, loading };
}

export default useFetchItems;
