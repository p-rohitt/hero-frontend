"use client";
import React from "react";

import { UserButton, useUser, UserProfile, SignIn } from "@clerk/nextjs";
export default function LoginPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <SignIn />
    </div>
  );
}
