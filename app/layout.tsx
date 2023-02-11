"use client";

import { AppShell, Global } from "@mantine/core";
import React from "react";
import { Footer, Header } from "../components";
import "../styles/globals.css";
import { Inter } from "@next/font/google";

const inter = Inter();

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <Global
          styles={(theme) => ({
            "*": {
              color: "#fff",
            },
            a: {
              padding: "0.1rem",
              textDecoration: "none",
            },
          })}
        />
        <AppShell footer={<Footer />} header={<Header />}>
          {children}
        </AppShell>
      </body>
    </html>
  );
};

export default RootLayout;
