"use client"


import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default async function Home() {
  // await new Promise(resolve => setTimeout(resolve, 200))
  const router = useRouter()
  return (
    <div>
      <ul>
        <Link href={'/'}><li>Home</li></Link>
        <Link href={'/about'}><li>About</li></Link>
        <Link href={'/contact'}><li>Cantact</li></Link>
      </ul>
      <button onClick={() => router.push("/about")}>go to about</button>
    </div>
  );
}
