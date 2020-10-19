import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { color, space, typography } from "styled-system";

import { Link as RouteLink } from "routes";

const StyledLink = styled.a`
  ${color};
  ${space};
  ${typography};
`;

const Link = ({ href, route, children, ...props }) => {
  return href ? (
    <StyledLink data-testid="external-link" href={href} {...props}>
      {children}
    </StyledLink>
  ) : (
    <RouteLink route={route} {...props}>
      <StyledLink data-testid="internal-link">{children}</StyledLink>
    </RouteLink>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  route: PropTypes.string,
  children: PropTypes.node
};

Link.displayName = "Link";

export default Link;
