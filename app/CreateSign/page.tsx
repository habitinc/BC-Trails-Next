// Use client directive for any components or pages utilizing state or hooks such as useState, useEffect, useReducer, useContext, etc. This directive is not required for components that only use props and do not have any internal state or side effects.
"use client";


// Page.tsx acts as the index.tsx for CreateSign subdirectory utilizing Next.js' app routing system. This allows the user to navigate to, and interact with, all necesary components and states without having to prop drill or hoist
import React from 'react';
import { SignBuilder, TopBar } from "@/components";
import Image from "next/image";
// import CustomButton from "@/components/CustomButton";
import { useState } from "react";

const Page = () => {
    const [title, setTitle] = useState('Create Sign'); // Default title
    
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-start overflow-hidden pt-40 px-6 lg:px-10 pb-24 w-full">
                <div className="w-full flex flex-col justify-center">
                    {/* Div for mobile landscape prompt, unsure if necessary if user will be primarily using on desktop or tablet */}
                    <div className="bg-gray-300 text-gray-800 w-full py-4 flex justify-center items-center text-center mb-6 rounded-md gap-1 md:hidden">
                        <Image src="/rotate-icon.svg" alt="Landscape mode icon" width={60} height={60} className='ml-3' />
                        <p className='mr-3'>To best preview your sign, please turn any mobile devices to landscape mode.</p>
                    </div>

                    {/* Heading in a blue rectangle */}
                    <div className="bg-primary-bc-blue text-white w-full rounded-t-lg py-8 flex justify-center items-center bc-sans">
                        <h1 className="text-center text-xl font-bold">{title}</h1>
                    </div>

                    {/* SignBuilder component */}
                    <div className="sign-builder w-full flex flex-col items-center justify-center rounded-b-lg bg-white">
                        <SignBuilder onTitleChange={setTitle} />
                    </div>
                </div>
            </main>
        </>
    );
}

export default Page;