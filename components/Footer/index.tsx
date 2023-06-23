import React from "react";

export default function Footer() {
  return (
    <footer className="md:h-[20vh]">
      <div className="h-full w-full flex justify-center">
        <p className="text-center h-full w-full">
          Made by Gergő Pásztor with{" "}
          <span className="text-transparent [text-shadow:0_0_theme(colors.red.400)] text-2xl">
            ❤
          </span>{" "}
          &copy; 2022
        </p>
      </div>
    </footer>
  );
}
