"use client";

import React from "react";
import { Footer, Header } from "components";
import "../styles/globals.css";
import { Nunito } from "@next/font/google";

const nunito = Nunito({ subsets: ["latin-ext", "latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="text-white">
      <body
        className={
          nunito.className +
          " overflow-x-hidden max-w-fit md:px-28 md:py-12 p-4 m-0 relative"
        }
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
