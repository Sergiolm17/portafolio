import React from "react";
import { App, P, Text } from "./styles";
import { useFetch } from "../../hooks/useFetch";

export default () => {
  const data = useFetch({
    url: "https://sergiolazaromondargo.firebaseio.com/about.json",
    init: []
  });

  return (
    <App>
      <P>About me</P>
      {data.map((tex, i) => (
        <Text key={i}>{tex}</Text>
      ))}
    </App>
  );
};
