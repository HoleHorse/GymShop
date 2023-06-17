import { useAppDispatch } from "./redux";
import { setItems } from "../store/itemsSlice";
import { useEffect, useState } from "react";

function useFetchItems() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const updateCookie = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith("update_items="))
      ?.split("=")[1];

    const shouldFetchItems =
      updateCookie === undefined || updateCookie === "true";

    if (shouldFetchItems) {
      fetch("http://localhost:5000/items", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch(setItems(data));
          document.cookie = "update_items=false; max-age=10800";
        })
        .catch(() => {
          setError("Our service is currently unavailable");
        })
        .finally(() => {
          setLoading(false);
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  return { error, loading };
}

export default useFetchItems;
