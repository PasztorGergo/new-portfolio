import React from "react";
import SectionTitle from "../SectionTitle";
import { createStyles, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  section: {},
}));

type Props = {};

export default function Skills({}: Props) {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>
      <Group></Group>
    </section>
  );
}
