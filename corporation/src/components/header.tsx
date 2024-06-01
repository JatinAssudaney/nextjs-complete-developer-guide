import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href="/" className="font-bold text-3xl">
          Home
        </Link>
        <div className="text-xl space-x-4">
          <Link href="/performance">Performance</Link>
          <Link href="/scale">Scale</Link>
          <Link href="/reliability">Reliability</Link>
        </div>
      </nav>
    </div>
  );
}
