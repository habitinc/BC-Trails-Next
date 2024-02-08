"use client";

import Link from 'next/link';
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = 'button',
  textStyles,
  icon, // This is correctly set up to accept ReactNode
  isDisabled = false,
  href
}: CustomButtonProps) => {
    const buttonContent = (
        <button
            disabled={isDisabled}
            type={btnType}
            className={`inline-flex items-center ${containerStyles}`}
            onClick={handleClick}
        >
            {icon && <span className="icon mr-2">{icon}</span>}
            <span className={textStyles}>{title}</span>
        </button>
    );

    return href ? (
        <Link href={href} passHref>
            {buttonContent}
        </Link>
    ) : (
        buttonContent
    );
}

export default CustomButton;