import { colors } from "constants/variants";
import { Tag as AntTag, TagProps as AntTagProps } from "antd";
import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseProps from "types/base";

const generateTagColors = () => {
  return colors.reduce((obj: Record<string, any>, color) => {
    obj[color] = {
      backgroundColor: `$${color}100 !important`,
      color: `$${color}800 !important`,
    };
    return obj;
  }, {});
};

const Component = styled(AntTag, {
  alignItems: "center",
  borderRadius: "$rounded !important",
  borderColor: "transparent !important",
  display: "inline-flex !important",
  fontWeight: "$medium !important",
  fontSize: "12px !important",
  w: "fit-content",
  variants: {
    color: {
      ...generateTagColors(),
      gray: {
        backgroundColor: "$coolGray100 !important",
        color: "$coolGray800 !important",
      },
      blue: {
        backgroundColor: "#CCE9F7 !important",
        color: "$primary500 !important",
      },
    },
    rounded: {
      true: {
        borderRadius: "$rounded-full !important",
      },
    },
    size: {
      large: {
        fontSize: "14px !important",
        padding: "3px 12px !important",
      },
    },
  },
});

type tagColors = typeof colors[number];
interface TagProps extends Omit<BaseProps, "color">, AntTagProps {
  color?: tagColors | "gray" | "blue";
  rounded?: boolean;
  size?: "small" | "large";
  [key: string]: any;
}

const Tag: FC<TagProps> = ({ css: cssProp = {}, ...props }) => {
  const {
    key,
    as,
    children,
    style,
    icon,
    closeIcon,
    visible = true,
    closable,
    onClose,
    ...rest
  } = props;

  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  if (!visible) {
    return null;
  }

  // @ts-ignore
  return <Component {...props} css={componentStyle} />;
};

export default Tag;
