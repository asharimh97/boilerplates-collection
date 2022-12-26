import { styled } from "configs/stitches.config";
import { FC } from "react";
import BaseGridProps from "types/grid";

const Component = styled("div", {
  display: "grid",
});

interface GridProps extends BaseGridProps {
  [key: string]: any;
}

const Grid: FC<GridProps> = ({ css: cssProp = {}, ...props }) => {
  const { key, as, children, style, ...rest } = props;
  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  return <Component {...props} css={componentStyle} />;
};

export default Grid;
