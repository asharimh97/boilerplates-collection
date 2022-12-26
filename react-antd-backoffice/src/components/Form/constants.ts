export const baseStyle = {
  borderColor: "$coolGray300",
  borderRadius: "$rounded",
  borderWidth: "1px",
  boxShadow: "$shadow-sm",
  height: "36px",
  mb: "12px",
};

export const statusVariants = {
  error: {
    $$shadow: "$colors$red100",
    "&.ant-input, &.ant-input-affix-wrapper": {
      borderColor: "$red300",

      "& .ant-input-suffix, & .ant-input-prefix": {
        color: "$red500",
      },

      "&:hover": {
        borderColor: "$red300 !important",
      },
      "&:focus": {
        borderColor: "$red300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  warning: {
    $$shadow: "$colors$orange100",
    "&.ant-input, &.ant-input-affix-wrapper": {
      borderColor: "$orange300",

      "& .ant-input-suffix, & .ant-input-prefix": {
        color: "$orange500",
      },

      "&:hover": {
        borderColor: "$orange300 !important",
      },
      "&:focus": {
        borderColor: "$orange300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  success: {
    $$shadow: "$colors$green100",
    "&.ant-input, &.ant-input-affix-wrapper": {
      borderColor: "$green300",

      "& .ant-input-suffix, & .ant-input-prefix": {
        color: "$green500",
      },

      "&:hover": {
        borderColor: "$green300 !important",
      },
      "&:focus": {
        borderColor: "$green300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  info: {
    $$color: "#2AA2DE",
    $$shadow: "rgb(42 162 222 / 20%)",
    "&.ant-input, &.ant-input-affix-wrapper": {
      borderColor: "$$color",

      "& .ant-input-suffix, & .ant-input-prefix": {
        color: "$$color",
      },

      "&:hover": {
        borderColor: "$$color !important",
      },
      "&:focus": {
        borderColor: "$$color",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
};

export const groupVariants = {
  "& .ant-input-group": {
    "& .ant-input": {
      height: "36px",
    },
  },
  "& .ant-input-group-addon:first-child": {
    borderTopLeftRadius: "$rounded",
    borderBottomLeftRadius: "$rounded",
  },
  "& .ant-input-group-addon:last-child": {
    borderTopRightRadius: "$rounded",
    borderBottomRightRadius: "$rounded",
  },
};

export const pickerStatusVariants = {
  error: {
    $$shadow: "$colors$red100",
    "&.ant-picker": {
      borderColor: "$red300",

      "&:hover": {
        borderColor: "$red300 !important",
      },
      "&:focus": {
        borderColor: "$red300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  warning: {
    $$shadow: "$colors$orange100",
    "&.ant-picker": {
      borderColor: "$orange300",

      "&:hover": {
        borderColor: "$orange300 !important",
      },
      "&:focus": {
        borderColor: "$orange300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  success: {
    $$shadow: "$colors$green100",
    "&.ant-picker": {
      borderColor: "$green300",

      "&:hover": {
        borderColor: "$green300 !important",
      },
      "&:focus": {
        borderColor: "$green300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  info: {
    $$color: "#2AA2DE",
    $$shadow: "rgb(42 162 222 / 20%)",
    "&.ant-picker": {
      borderColor: "$$color",

      "&:hover": {
        borderColor: "$$color !important",
      },
      "&:focus": {
        borderColor: "$$color",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
};

export const selectStatusVariants = {
  error: {
    $$shadow: "$colors$red100",
    "&.ant-select > .ant-select-selector": {
      borderColor: "$red300",

      "&:hover": {
        borderColor: "$red300 !important",
      },
      "&:focus": {
        borderColor: "$red300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  warning: {
    $$shadow: "$colors$orange100",
    "&.ant-select > .ant-select-selector": {
      borderColor: "$orange300",

      "&:hover": {
        borderColor: "$orange300 !important",
      },
      "&:focus": {
        borderColor: "$orange300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  success: {
    $$shadow: "$colors$green100",
    "&.ant-select > .ant-select-selector": {
      borderColor: "$green300",

      "&:hover": {
        borderColor: "$green300 !important",
      },
      "&:focus": {
        borderColor: "$green300",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
  info: {
    $$color: "#2AA2DE",
    $$shadow: "rgb(42 162 222 / 20%)",
    "&.ant-select > .ant-select-selector": {
      borderColor: "$$color",

      "&:hover": {
        borderColor: "$$color !important",
      },
      "&:focus": {
        borderColor: "$$color",
        boxShadow: "0 0 0 2px $$shadow",
      },
    },
  },
};
