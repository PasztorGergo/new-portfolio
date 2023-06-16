"use client";

import Role from "components/Role";
import { motion, MotionValue, useSpring, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const roles: Array<string> = [
  "Developer 👨‍💻",
  "Twitter Creator ✍️",
  "日本語を勉強しています 🇯🇵",
];

export default function Hero() {
  const motionValue = useSpring(1);

  useEffect(() => {
    const mv = motionValue.get();
    const inter = setInterval(
      () => motionValue.set(mv === 3 ? 0 : mv + 1),
      1000
    );

    inter;

    return () => clearInterval(inter);
  }, [motionValue]);

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
          <Role mv={motionValue} number={i}>
            {x}
          </Role>
        ))}
      </div>
    </header>
  );
}
