"use client";

import React from 'react';
import Image from "next/image";
import { SignBuilder, SignPreview, TopBar } from "@/components";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const page = () => {
    return (
        <>
        <TopBar showLogo={true}/>
            <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
                <div className="sign-builder flex flex-col align-middle justify-center">

                    <p className="text-center mb-12 max-w-sm mx-auto bc-sans ">Create Sign Page</p>
                    <CustomButton
                        title="Get Started"
                        containerStyles="text-bcwhite bg-primary-bc-light-blue rounded-md mx-auto"
                    />
                </div>


            </main>
        </>
    );
}

export default page