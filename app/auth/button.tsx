"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export function Button() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (session) {
    return (
      <button
        className="cursor-pointer bg-black px-4 py-2 capitalize text-white"
        onClick={(e) => {
          e.preventDefault();
          signOut();
        }}
      >
        sign out
      </button>
    );
  }

  return (
    <button
      className="cursor-pointer bg-black px-4 py-2 capitalize text-white"
      onClick={() => signIn()}
    >
      sign in
    </button>
  );
}
