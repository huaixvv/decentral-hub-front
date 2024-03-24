"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // 重定向到指定路由
    router.push('/wallet');
  }, []);


  return (
    <main className="flex min-h-screen flex-col p-24 justify-center items-center">
       <div>Loading......</div>
    </main>
  );
}
