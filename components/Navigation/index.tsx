import React from "react";
import { Navbar } from "@mantine/core";
import NavBox from "../NavBox";

export default function Navigation() {
  return (
    <Navbar fixed sx={{ maxWidth: "30%", border: "none" }}>
      <NavBox href="about">About</NavBox>
      <NavBox href=""></NavBox>
      <NavBox href=""></NavBox>
      <NavBox href=""></NavBox>
    </Navbar>
  );
}
