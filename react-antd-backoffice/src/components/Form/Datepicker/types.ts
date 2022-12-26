import { DatepickerProps as PickerProps, InputStatus } from "../types";

export interface DatepickerProps extends Omit<PickerProps, "status"> {
  status?: InputStatus;
  type?: "range" | "base";
  [key: string]: any;
}
