"use client";

import Image from "next/image";
import { SignBuilder, SignPreview, TopBar } from "@/components";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
        <div className="sign-builder flex flex-col align-middle justify-center">
          <Image
            src="/bc-trails-logo.svg"
            alt="BC Trails Logo"
            width={344}
            height={75}
            className="max-w-full mx-auto mb-12"
          />
          <p className="text-center mb-12 max-w-sm mx-auto bc-sans ">Welcome to the RSTBC Kiosk Sign Generator. Complete the questionnaire below to generate a sign and download print-ready files.</p>
          <CustomButton
            title="Get Started"
            containerStyles="text-bcwhite bg-primary-bc-light-blue rounded-md mx-auto"
            href="/CreateSign" // Use the href prop for navigation
          />
        </div>
      </main>
    </>
  );
}
