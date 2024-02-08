import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TopBar = () => {
    return (
        <div className="bg-bcblue w-full h-4 flex items-center">

            <div className="absolute top-5 left-0 pl-2 pt-1">
                <Link href="/" passHref>
                    <Image
                        src="/bc-trails-logo.svg"
                        alt="BC Trails Logo"
                        width={192}
                        height={41}
                        className="max-w-full"
                    />
                </Link>
            </div>

        </div>
    );
};

export default TopBar;