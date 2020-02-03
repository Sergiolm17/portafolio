import React from "react";
import { App, P, Text } from "./styles";
import { AboutMeData } from "../../data";

export default () => {
  return (
    <App>
      <P>About me</P>
      {AboutMeData.map((tex, i) => (
        <Text key={i}>{tex}</Text>
      ))}
    </App>
  );
};
