"use client";

import Image from "next/image";
import { SignBuilder, SignPreview, TopBar } from "@/components";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";
import { ArrowRightCircleIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-start overflow-hidden pt-40">
        <div className="sign-builder flex flex-col items-center justify-center">
          <Image
            src="/bc-trails-logo.svg"
            alt="BC Trails Logo"
            width={320}
            height={60}
            className="mx-auto mb-12"
          />
          <p className="text-center mb-12 max-w-md mx-auto bc-sans text-primary-bc-blue text-lg px-2">Welcome to the RSTBC Kiosk Sign Generator. Complete the following selections to generate a sign and download print-ready files.</p>
          <CustomButton
            title="Begin"
            containerStyles="w-32 bg-bc-light-blue hover:bg-primary-bc-blue text-white py-3 pl-2 rounded-md flex flex-row-reverse items-center mx-auto gap-3 justify-center"
            icon={<ArrowRightCircleIcon className="w-5 h-5" />}
            href="/CreateSign" // Use the href prop for navigation
          />
        </div>
      </div>
    </>
  );
}