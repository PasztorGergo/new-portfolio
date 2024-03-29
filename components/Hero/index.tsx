"use client";
import React from "react";

const roles: Array<string> = [
  "Developer 👨‍💻",
  "Twitter Creator ✍️",
  "日本語を勉強しています 🇯🇵",
  "Student 👨‍🎓",
  "Developer 👨‍💻",
];

export default function Hero() {
  return (
    <header className="flex flex-col px-4 md:px-16 items-center justify-center md:justify-start pt-32 gap-8 text-center h-screen">
      <h2 className="text-[clamp(24px,10vw,1.5rem)] font-bold">
        Greetings 👋 My name is
      </h2>
      <h1 className="text-[clamp(32px,15vw,6rem)] font-bold bg-[radial-gradient(192.65%_4099.63%_at_87.48%_0.02%,#00B25A_0%,#00A7B2_100%)] bg-clip-text text-transparent">
        Gergő Pásztor
      </h1>
      <div className="flex items-center">
        <div className="max-h-8 overflow-hidden">
          <ul className="mx-1 animate-[scrollUp_6s_infinite]">
            {roles.map((role) => (
              <li
                key={role}
                className="flex items-center font-bold justify-center text-[clamp(20px,6vw,1.5rem)] text-center"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 650, behavior: "smooth" })}
        className="rounded-lg bg-brand text-white text-sm hover:bg-opacity-75 transition-all font-bold text-center px-4 py-3 uppercase mt-4"
      >
        Learn more
      </button>
    </header>
  );
}
