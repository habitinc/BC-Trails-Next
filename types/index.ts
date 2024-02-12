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
  trailName?: string;
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