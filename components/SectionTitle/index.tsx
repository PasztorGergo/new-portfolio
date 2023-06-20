import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
  return (
    <h2 className="border-l-4 border-l-brand pl-2 text-2xl font-bold mb-8">
      {children}
    </h2>
  );
}
