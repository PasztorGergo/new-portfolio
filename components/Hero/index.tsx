"use client";

import Role from "components/Role";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect, useState } from "react";

const roles: Array<string> = [
  "Developer 👨‍💻",
  "Twitter Creator ✍️",
  "日本語を勉強しています 🇯🇵",
];

export default function Hero() {
  const [role, setRole] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => setRole((x) => (x + 1 > 2 ? 0 : x + 1)), 3000);
    console.log(role);
  }, [role]);

  return (
    <header className="flex flex-col px-16 items-center justify-start md:pt-32 gap-8 text-center h-screen">
      <h2 className="text-[clamp(24px,10vw,1.5rem)] font-bold">
        Greetings 👋 My name is
      </h2>
      <h1 className="text-[clamp(32px,15vw,6rem)] font-bold bg-[radial-gradient(192.65%_4099.63%_at_87.48%_0.02%,#00B25A_0%,#00A7B2_100%)] bg-clip-text text-transparent">
        Gergő Pásztor
      </h1>
      <div className="relative w-full">
        {roles.map((x, i) => (
          <Role mv={role} number={i} key={i + role}>
            {x}
          </Role>
        ))}
      </div>
    </header>
  );
}
