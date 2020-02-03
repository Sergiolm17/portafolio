import React from "react";
import { Link, Background, Title, Hr, Group, Contact } from "./styles";
import { email, emailhref, resumehref } from "../../data";

export default ({ inopen, setOpen }) => {
  if (!inopen) return "";
  return (
    <Background>
      <Title>NAVIGATION</Title>
      <Hr />
      <Group>
        <Link to="/about-me" onClick={setOpen}>
          About me
        </Link>
        <Link to="/work" onClick={setOpen}>
          Selected Work
        </Link>
        <Link to="/contact" onClick={setOpen}>
          Contact
        </Link>
      </Group>
      <Group>
        <Contact href={emailhref}>{email} </Contact>
        <Contact href={resumehref}>+Download My resume</Contact>
      </Group>
    </Background>
  );
};
