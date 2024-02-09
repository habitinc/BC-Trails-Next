"use client";

import React from 'react';
import Image from "next/image";
import { SignBuilder, SignPreview, TopBar } from "@/components";
import { useState } from "react";
import CustomButton from "@/components/CustomButton";

const page = () => {
    return (
        <>
        <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden" style={{ padding: '24px', width: '100vw' }}>
            <div className="w-full flex flex-col items-center justify-center">
                {/* Heading in a blue rectangle */}
                <div className="bg-primary-bc-light-blue text-white w-full rounded-t-lg py-4 flex justify-center items-center bc-sans" style={{ maxWidth: '100%' }}>
                    <h1 className="text-center text-3xl">Create Sign</h1>
                </div>

                {/* SignBuilder component */}
                <div className="sign-builder w-full flex flex-col items-center justify-center rounded-b-lg bg-white">
                    <SignBuilder />
                </div>
            </div>
        </main>
    </>
);
}

export default page;