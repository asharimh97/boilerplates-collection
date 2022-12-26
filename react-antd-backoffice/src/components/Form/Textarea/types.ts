import { InputProps } from "../Input";

export interface TextareaProps extends InputProps {
  type?: "base" | "rtf";
  rows?: string | number;
  cols?: string | number;
  [key: string]: any;
}
