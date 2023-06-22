import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionTitle({ children, className }: Props) {
  return (
    <h2
      className={
        "border-l-4 border-l-brand pl-2 text-2xl font-bold mb-8 " + className
      }
    >
      {children}
    </h2>
  );
}
