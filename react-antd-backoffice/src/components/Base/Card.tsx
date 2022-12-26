import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseProps from "types/base";

const Component = styled("div", {
  backgroundColor: "$white",
  boxShadow: "$shadow-md",
  borderRadius: "$rounded",
  padding: "16px",
});

interface CardProps extends BaseProps {
  [key: string]: any;
}

const Card: FC<CardProps> = ({ css: cssProp = {}, ...props }) => {
  const { key, as, children, style, ...rest } = props;
  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  return <Component {...props} css={componentStyle} />;
};

export default Card;
