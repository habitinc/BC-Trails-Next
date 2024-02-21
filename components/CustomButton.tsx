// Use client directive for any components or pages utilizing state or hooks such as useState, useEffect, useReducer, useContext, etc. This directive is not required for components that only use props and do not have any internal state or side effects.
"use client";

import Link from 'next/link';
import { CustomButtonProps } from "@/types";


// CustomButton component includes types from /types/index.ts, can be further adjusted or refined from there
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = 'button',
  textStyles,
  icon,
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