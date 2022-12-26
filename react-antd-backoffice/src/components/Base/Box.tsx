import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseProps from "types/base";

const Component = styled("div", {});

interface BoxProps extends BaseProps {
  [key: string]: any;
}

const Box: FC<BoxProps> = ({ css: cssProp = {}, ...props }) => {
  const { key, as, children, style, ...rest } = props;
  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  return <Component {...props} css={componentStyle} />;
};

export default Box;
