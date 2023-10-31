"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session?.user);
    if (!session?.user) {
      router.push("/signin");
    }
    if (session?.user) {
      router.push("/home");
    }
  }, [session?.user]);

  return (
    <main className=" flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-hidden dark:bg-darkTheme">
      <Image
        src="/logo.png"
        width={300}
        height={300}
        alt="logo"
      />
      <h1 className=" text-3xl font-bold">Snaptweet</h1>
    </main>
  );
}