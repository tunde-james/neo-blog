"use client";

import Link from "next/link";
import { Button as AuthButton } from "../auth/button";
import { SessionProvider } from "next-auth/react";

function Header() {
  return (
    <SessionProvider>
      <header className="border-black flex justify-between border-b">
        <Link href="/" className="px-4 py-2 text-4xl capitalize">
          neo
        </Link>
        <AuthButton />
      </header>
    </SessionProvider>
  );
}

export default Header;
