"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect("/dashboard");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Image
        src="/logo.png"
        alt="Loading logo"
        width={150}
        height={150}
        className="animate-pulse"
      />
    </div>
  );
}
