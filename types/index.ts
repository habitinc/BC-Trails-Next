// This file should denote types for various components, such as buttons, forms, and other components that may be utilized within the application. This is a good practice to ensure that the codebase is organized and easy to maintain. This file should be located in the types directory within the app directory.
// Any additional types that are required to be created can be defined here and exported, and then imported within their respective components where they are to be utilized. Ensure your types are strongly defined as this can cause errors within typescript if you are passing props that are not defined within the types file.

import { MouseEventHandler } from "react";
import { ReactNode } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  icon?: ReactNode; // New optional prop for passing an icon component
  isDisabled?: boolean;
  href?: string;
}

export interface SignProps {
  dimensions: string;
  trailNetworkName?: string;
  trailNetworkAbout?: string;
  indigenousTrailNetworkName?: string;
  indigenousTrailNetworkAbout?: string;
}

export interface DimensionProps {
  title: string;
  dimensions: string; // Added to hold the "WxH" format string
}

export interface DimensionSelectorProps {
  dimensions: DimensionProps[]; // Include the dimensions array
  selectedDimension: DimensionProps | null;
  onSelectDimension: (dimension: DimensionProps) => void;
}

export interface FormStep {
  type: string; // A unique identifier for the step, e.g., "dimension", "material", etc.
  title: string; // The title to display for the step
  options: DimensionProps[]; // Assuming all steps use DimensionProps for simplicity; adjust as needed
}