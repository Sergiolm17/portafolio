import { useState, useEffect } from "react";

export function useFetch(props) {
  const [date, setDate] = useState(props.init);
  useEffect(() => {
    fetch(props.url)
      .then(res => res.json())
      .then(res => setDate(res));
  }, [props.url]);
  return date;
}
