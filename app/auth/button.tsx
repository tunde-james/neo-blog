"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export function Button() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (session) {
    return (
      <div className="flex items-stretch">
        <Link href="/blog/new" className="mr-6 self-center hover:underline">
          ✍️ Write a Post
        </Link>
        <button
          className="cursor-pointer bg-black p-4 text-white"
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div
      onClick={() => signIn()}
      className="cursor-pointer bg-black p-4 text-white"
    >
      Sign In
    </div>
  );
}
