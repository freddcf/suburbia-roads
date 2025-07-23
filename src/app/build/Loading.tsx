"use client";

import { Logo } from "@/components/Logo";
import { useProgress } from "@react-three/drei";
import clsx from "clsx";

export default function Loading() {
  const { progress } = useProgress();

  return (
    <div
      className={clsx(
        "absolute inset-0 grid place-content-center bg-zinc-900 text-[15vw]  font-ant text-white transition-opacity duration-1000",
        progress >= 100 ? "pointer-events-none opacity-0" : "opacity-100"
      )}
    >
      <Logo className="w-[15vw]" />
      <p className="w-full content-center text-center leading-none text-zinc-50">
        LOADING...
      </p>
    </div>
  );
}
