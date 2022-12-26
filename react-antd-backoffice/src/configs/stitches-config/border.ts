import type * as Stitches from "@stitches/react";

/* eslint-disable max-len */
export const radii = {
  "rounded-sm": "2px",
  rounded: "4px",
  "rounded-md": "6px",
  "rounded-lg": "8px",
  "rounded-xl": "10px",
  "rounded-2xl": "12px",
  "rounded-3xl": "24px",
  "rounded-full": "9999px",
};

export const shadows = {
  "shadow-xs": "0 0 0 1px rgba(0, 0, 0, 0.05)",
  "shadow-sm": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  "shadow-md":
    "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.1)",
  "shadow-lg":
    "0px 4px 6px -2px rgba(0, 0, 0, 0.05), 0px 10px 15px -3px rgba(0, 0, 0, 0.1)",
  "shadow-xl":
    "0px 10px 10px -5px rgba(0, 0, 0, 0.04), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
  "shadow-2xl": "0px 25px 50px -12px rgba(0, 0, 0, 0.25)",
  "shadow-inner": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
  "shadow-outline": "0 0 0 3px rgba(66, 153, 225, 0.5)",
  "shadow-focus": "0 0 0 3px $primary200",
};

export const borders = {
  br: (value: Stitches.PropertyValue<"borderRadius">) => ({
    borderRadius: value,
  }),
};
