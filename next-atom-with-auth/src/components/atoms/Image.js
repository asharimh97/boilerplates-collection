import React from "react";
import { LoadingOutlined as Loading } from "@ant-design/icons";
import PropTypes from "prop-types";
import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { border } from "styled-system";

import Box from "./Box";
import { convertNumberToPixel, handleErrorImage } from "utils/helper";

const ROUND_RADIUS = "8px";

const rounded = props => props.rounded && { borderRadius: ROUND_RADIUS };

const fullRounded = props =>
  props.fullRounded && {
    borderRadius: `calc(${convertNumberToPixel(props.height)} / 2)`
  };

const Img = styled(Box).attrs(props => ({
  as: "img"
}))`
  display: block;
  ${rounded};
  ${fullRounded};
`;

const ImgWrapper = styled(Box)`
  position: relative;
`;

const ImgFit = styled.img`
  height: 100% !important;
  object-position: center;
  object-fit: cover;
  position: absolute;
  width: 100% !important;

  ${border}
  ${rounded}
  ${fullRounded}
`;

const Image = ({ src, alt, autofit, ...props }) => {
  return /.svg/i.test(src) ? (
    <Box {...props}>
      <ReactSVG
        src={src}
        beforeInjection={svg => {
          svg.style = "width: 100%; height: auto;";
        }}
        fallback={() => (
          <Image src="wtf" autofit height={props.height} width={props.width} />
        )}
        loading={() => <Loading />}
        wrapper="span"
      />
    </Box>
  ) : autofit ? (
    <ImgWrapper {...props}>
      <ImgFit src={src} alt={alt} {...props} onError={handleErrorImage} />
    </ImgWrapper>
  ) : (
    <Img src={src} alt={alt} {...props} onError={handleErrorImage} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  autofit: PropTypes.bool,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string
  ]),
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array,
    PropTypes.string
  ])
};

Image.defaultProps = {
  alt: "",
  src: "/public/placeholder.png"
};

Image.displayName = "Image";

export default Image;
