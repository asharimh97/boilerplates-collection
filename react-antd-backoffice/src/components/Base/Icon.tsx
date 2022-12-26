import { styled } from "configs/stitches.config";
import { ReactSVG, Props } from "react-svg";
import BaseProps from "types/base";

const Component = styled(ReactSVG, {});

interface IconProps
  extends Omit<
      BaseProps,
      "color" | "width" | "height" | "overflow" | "display" | "key"
    >,
    Props {
  size?: number | string;
  [key: string]: any;
}

function Icon({ css: cssProp = {}, src, ...props }: IconProps) {
  const {
    key,
    as,
    color,
    size,
    fallback,
    wrapper,
    evalScripts,
    afterInjection,
    beforeInjection,
    loading,
    ...rest
  } = props;

  const componentStyle = {
    ...cssProp,
    ...rest,
    "& svg": {},
  };

  if (size) {
    // @ts-ignore
    componentStyle["& svg"].size = size;
  }

  if (color) {
    // @ts-ignore
    componentStyle["& svg, & rect, & path"] = {
      fill: color,
    };
  }

  const imgSrc = src.toLowerCase().includes("http")
    ? src
    : `${process.env.PUBLIC_URL}/icons/${src}.svg`;

  return (
    // @ts-ignore
    <Component {...props} src={imgSrc} wrapper="span" css={componentStyle} />
  );
}

export default Icon;
