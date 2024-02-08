import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    prevIcon?: string;
    resetIcon?: string;
    isDisabled?: boolean;
    href?: string;
}

export interface DimensionProps {
    title: string;
    dimensions: string; // Added to hold the "WxH" format string
  }

  export interface FormStep {
    type: string; // A unique identifier for the step, e.g., "dimension", "material", etc.
    title: string; // The title to display for the step
    options: DimensionProps[]; // Assuming all steps use DimensionProps for simplicity; adjust as needed
  }