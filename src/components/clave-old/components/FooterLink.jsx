import React, { useContext } from "react";
import styled from "styled-components";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PINK } from "../colors";
import { ColorContext } from "./Layout";

const FooterLink = ({ href, children, className, ...props }) => {
	const { textColor } = useContext(ColorContext);

	return (
		<ColoredLink
			className={className}
			href={href}
			{...props}
			$textColor={textColor}
		>
			{children}
		</ColoredLink>
	);
};

const ANCHOR_STYLES = `
  text-decoration: none;
  &:hover{
    text-decoration: underline;
    color: ${COLOR_CLAVE_PINK};
  }
`;

const StyledAnchor = styled.a`
  ${ANCHOR_STYLES}
`;

const StyledLink = styled.a`
  ${ANCHOR_STYLES}
`;

const ColoredLink = styled(StyledAnchor)`
    color: ${(props) => props.$textColor || COLOR_CLAVE_GREEN};
  `;

export default FooterLink;
