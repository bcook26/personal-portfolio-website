"use client";

import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

export default function HeroVisual() {
  return (
    <div className="h-64 md:h-[500px]" aria-hidden="true">
      <HeroCanvas />
    </div>
  );
}
