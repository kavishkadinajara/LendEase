"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full min-h-screen rounded-md  flex flex-col items-center justify-center relative w-full">
    <ShootingStars />
    <StarsBackground />
    {children}
  </div>

  );
}
