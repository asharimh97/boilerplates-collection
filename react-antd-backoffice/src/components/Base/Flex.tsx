import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseFlexProps from "types/flex";

const Component = styled("div", {
  alignItems: "flex-start",
  display: "flex",
});

interface FlexProps extends BaseFlexProps {
  [key: string]: any;
}

const Flex: FC<FlexProps> = ({ css: cssProp = {}, ...props }) => {
  const { key, as, children, style, ...rest } = props;
  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  // @ts-ignore
  return <Component {...props} css={componentStyle} />;
};

// const Flex = Component;

export default Flex;
