"use client";

import Image from "next/image";
import ThemeToggleButton from "@/components/ui/ThemeToggleButton";

export default function Home() {
  return (
    <main className=" flex h-screen w-screen flex-col items-center justify-center gap-8 dark:bg-darkTheme">
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="logo"
      />
      <h1 className=" text-3xl font-bold">Snaptweet</h1>
      <ThemeToggleButton />
    </main>
  );
}