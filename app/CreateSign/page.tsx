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
                <div className="sign-builder w-full flex flex-col items-center justify-center">

                    <p className="text-center mb-12 mx-auto bc-sans" style={{ maxWidth: '95%' }}>Create Sign Page</p>
                    <SignBuilder />
                </div>
            </main>
        </>
    );
}

export default page;