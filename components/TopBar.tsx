// Simple component to showcase a sort of NavBar for the application, unsure if conditional rendering is necessary for the logo to not appear on homepage, but for usabilty should appear universal on all screens user navigates within

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {
    return (
        <span className="bg-bcblue w-full h-4 flex items-center z-10 absolute">

            <span className="absolute top-5 left-0 pl-2 pt-1">
                <Link href="/" passHref>
                    <Image
                        src="/bc-trails-logo.svg"
                        alt="BC Trails Logo"
                        width={192}
                        height={41}
                    />
                </Link>
            </span>

        </span>
    );
};

export default TopBar;