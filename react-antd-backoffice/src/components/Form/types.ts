import { DatePickerProps, TimeRangePickerProps } from "antd";
import BaseProps from "types/base";

type CSSType = Pick<BaseProps, "css">;

export type InputStatus = "error" | "warning" | "success" | "info";

export interface BaseInputProps {
  css?: CSSType;
  label?: string;
  helper?: string;
  errorMessage?: string;
  required?: boolean;
}

export interface DatepickerProps
  extends BaseInputProps,
    Omit<DatePickerProps, "picker" | "mode"> {
  [key: string]: any;
}

export interface RangepickerProps extends BaseInputProps, TimeRangePickerProps {
  [key: string]: any;
}
