"use client";
import React from "react";

import { UserButton, useUser, UserProfile, SignUp } from "@clerk/nextjs";
export default function LoginPage() {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <div className=" p-20 flex flex-col justify-center items-center ">
      <SignUp />
    </div>
  );
}
