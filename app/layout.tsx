"use client";

import React from "react";
import { Footer, Header } from "components";
import "../styles/globals.css";
import { Nunito } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin-ext", "latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="text-white">
      <body className={nunito.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
