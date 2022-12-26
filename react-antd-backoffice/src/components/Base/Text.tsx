import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseTextProps from "types/text";

const TextComponent = styled("p", {
  variants: {
    italic: {
      true: {
        fontStyle: "italic",
      },
    },
    uppercase: {
      true: {
        textTransform: "uppercase",
      },
    },
    lowercase: {
      true: {
        textTransform: "lowercase",
      },
    },
    caps: {
      true: {
        textTransform: "capitalize",
      },
    },
    ellipsis: {
      true: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
});

interface TextProps extends BaseTextProps {
  [key: string]: any;
}

const Text: FC<TextProps> = ({ css: cssProp = {}, ...props }) => {
  const { key, as, children, style, ...rest } = props;
  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  if (props.weight) {
    componentStyle.fontWeight = props.weight;
  }

  if (props.size) {
    componentStyle.fontSize = props.size;
  }

  if (props.family) {
    componentStyle.fontFamily = props.family;
  }

  if (props.height) {
    componentStyle.lineHeight = props.height;
  }

  if (props.spacing) {
    componentStyle.letterSpacing = props.spacing;
  }

  if (props.align) {
    componentStyle.textAlign = props.align;
  }

  return <TextComponent {...props} css={componentStyle} />;
};

export default Text;
