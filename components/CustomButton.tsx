"use client";

import Link from 'next/link';
import { CustomButtonProps } from "@/types";
// Import Image from "next/image"; // Uncomment if you're using the prevIcon

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = 'button',
  textStyles,
  prevIcon, // Assuming you might uncomment and use this later
  isDisabled = false,
  href
}: CustomButtonProps) => {
    // Button content
    const buttonContent = (
        <button
            disabled={isDisabled}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>{title}</span>
            {/* Conditional rendering for prevIcon, uncomment if needed
            {prevIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={prevIcon}
                        alt="icon"
                        fill
                        className="object-contain"
                    />
                </div>
            )} */}
        </button>
    );

    // If href is provided, wrap the button or its content in a Link for navigation
    // Otherwise, just render the button
    return href ? (
        <Link href={href} passHref>
            {buttonContent}
        </Link>
    ) : (
        buttonContent
    );
}

export default CustomButton;