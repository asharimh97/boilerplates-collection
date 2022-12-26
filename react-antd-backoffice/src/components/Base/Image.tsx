import { styled, config } from "configs/stitches.config";
import BaseProps from "types/base";
import { handleErrorImage } from "utils/image";
import Flex from "./Flex";
import Text from "./Text";
import type * as Stitches from "@stitches/react";

const Img = styled("img", {});

const ImgWrapper = styled("div", {
  position: "relative",

  "& > img": {
    borderRadius: "inherit",
    height: "100%",
    left: 0,
    objectFit: "cover",
    objectPosition: "center",
    position: "absolute",
    top: 0,
    width: "100%",
  },
});

interface ImageProps
  extends BaseProps,
    Omit<React.ImgHTMLAttributes<ImageProps>, "color" | "height" | "width"> {
  css?: Stitches.CSS<typeof config>;
  caption?: string;
  autofit?: boolean;
  ratio?: string | number;
  size?: string;
}

const Image = ({
  css: cssProp = {},
  caption,
  src: source,
  alt,
  autofit,
  size,
  ...props
}: ImageProps) => {
  const { key, as, children, style, ...rest } = props;
  let src = source;

  const isBlob = source?.startsWith("blob:");
  const isBase64 = source?.startsWith("data:");
  const isUrl = source?.startsWith("http") || source?.startsWith("//");

  if (source && !isBlob && !isBase64 && !isUrl) {
    src = `${process.env.PUBLIC_URL}${source}`;
  }

  const componentStyle = {
    ...cssProp,
    ...rest,
  };

  if (props.ratio) {
    componentStyle.aspectRatio = props.ratio;
  }

  if (size) {
    componentStyle.width = size;
    componentStyle.height = size;
  }

  const renderContent = () => {
    if (autofit) {
      return (
        // @ts-ignore
        <ImgWrapper {...props} css={componentStyle}>
          <img alt={alt} src={src} onError={(e) => handleErrorImage(e)} />
        </ImgWrapper>
      );
    }

    // @ts-ignore
    return <Img src={src} alt={alt} {...props} css={componentStyle} />;
  };

  if (caption) {
    return (
      <Flex align="center" direction="column">
        {renderContent()}
        <Text color="$coolGray400" size="$sm" marginTop="8px">
          {caption}
        </Text>
      </Flex>
    );
  }

  return renderContent();
};

export default Image;
