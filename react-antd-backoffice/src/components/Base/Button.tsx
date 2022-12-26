/* eslint-disable max-len */
import { Button as AntButton, ButtonProps as AntButtonProps } from "antd";
import { styled, config } from "configs/stitches.config";
import BaseProps from "types/base";
import type * as Stitches from "@stitches/react";

const Component = styled(
  AntButton,
  {
    "&.ant-btn": {
      alignItems: "center",
      boxShadow: "$shadow-sm",
      borderRadius: "$rounded-md",
      display: "flex",
      fontWeight: "$medium",
      justifyContent: "center",
    },
    variants: {
      color: {
        primary: {
          "&.ant-btn": {
            backgroundColor: "$primary",
            color: "$white",
            borderColor: "$primary",

            "&:hover": {
              backgroundColor: "$primary300",
              color: "$white",
            },
          },
        },
        "primary-soft": {
          "&.ant-btn": {
            backgroundColor: "$red50",
            color: "$red600",
            borderColor: "$red50",

            "&:hover": {
              backgroundColor: "$red100",
              color: "$red600",
            },
          },
        },
        secondary: {
          "&.ant-btn": {
            backgroundColor: "$secondary",
            color: "$white",
            borderColor: "$secondary",
          },
        },
      },
    },
  },
  // Sizing variants
  {
    variants: {
      size: {
        small: {
          "&.ant-btn": {
            fontSize: "12px",
            height: "28px",
          },
        },
        medium: {
          "&.ant-btn": {
            fontSize: "14px",
            height: "32px",
          },
        },
        regular: {
          "&.ant-btn": {
            fontSize: "14px",
            height: "36px",
          },
        },
        large: {
          "&.ant-btn": {
            fontSize: "16px",
            height: "40px",
          },
        },
        xlarge: {
          "&.ant-btn": {
            fontSize: "16px",
            height: "48px",
          },
        },
      },
    },
  },
);

const IconWrapper = styled("span", {
  "&:first-child": {
    marginRight: "8px",
  },
  "&:last-child": {
    marginLeft: "8px",
  },
});

type CustomButtonProps = Stitches.VariantProps<typeof Component>;
// @ts-ignore
interface ButtonProps extends BaseProps, CustomButtonProps, AntButtonProps {
  css?: Stitches.CSS<typeof config>;
  leftIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  rightIcon?: React.ReactNode;
  suffix?: React.ReactNode;
  children?: React.ReactNode;
}

// This button component will not using custom props such as spacing, color, etc.
const Button = ({
  children,
  leftIcon,
  rightIcon,
  prefix,
  suffix,
  size = "regular",
  css: cssProps = {},
  ...props
}: ButtonProps) => {
  const { icon, shape } = props;
  const preIcon = leftIcon || prefix;
  const postIcon = rightIcon || suffix;

  let componentStyle = {
    ...cssProps,
  };

  if (!children && !shape && icon) {
    componentStyle.padding = "4px 10px";
  }

  if (children && icon) {
    componentStyle = {
      ...componentStyle,
      "&.ant-btn": {
        "& span:last-child": {
          marginLeft: "8px",
        },
      },
    };
  }

  if (shape === "circle") {
    componentStyle = {
      ...componentStyle,
      "&.ant-btn": {
        p: "4px 10px",
        br: "$rounded-full",
      },
    };
  }

  return (
    // @ts-ignore
    <Component size={size} {...props} css={componentStyle}>
      {preIcon && <IconWrapper>{preIcon}</IconWrapper>}
      {children}
      {postIcon && <IconWrapper>{postIcon}</IconWrapper>}
    </Component>
  );
};

export default Button;
