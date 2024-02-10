"use client";

import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  auth,
  UserButton,
  isLoggedIn,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const isLoginRoute =
    currentPath.includes("/login") || currentPath.includes("/signup");
  return (
    <div className="w-[100vw] bg-slate-50 flex items-center p-3">
      <div className="w-[100vw] flex justify-between items-center">
        <div>
          <Image src="/hero.png" alt="tvs.png" width={100} height={25} />
        </div>

        <div className="flex space-x-3">
          <SignedOut>
            <Link
              className="bg-white text-black rounded-md font-semibold font-inter px-4 py-2 hover:text-white hover:bg-red-500"
              href="login"
            >
              Sign In
            </Link>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
