import Link from "next/link";
import React from "react";
import { createStyles } from "@mantine/core";

const useStyle = createStyles((theme) => ({
  triangle: {
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    background: theme.colors.lime[3],
    aspectRatio: "1/1",
    width: "1.25rem",
  },
}));

export default function NavBox({ href }: any) {
  const { classes } = useStyle();
  return (
    <div className={classes.triangle}>
      <Link href={`#${{ href }}`}>
        <a></a>
      </Link>
    </div>
  );
}
