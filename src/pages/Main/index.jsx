import React, { useState, useEffect } from "react";
import { P, App } from "./styled";
import { MainData, MainWho } from "../../data";
let minimum_number = 0;
let max_number = 1;
console.log();

export default () => {
  const [count, setCount] = useState(
    Math.floor(
      Math.random() * (max_number + 1 - minimum_number) + minimum_number
    )
  );

  useEffect(() => {
    let inter = setInterval(() => {
      setCount(c => (c >= max_number ? 0 : c + 1));
    }, 3000);
    return () => {
      clearInterval(inter);
    };
  }, []);
  return (
    <App className="Container">
      <P>{MainData[0]} </P>
      <P>{MainWho[count]} </P>
    </App>
  );
};
