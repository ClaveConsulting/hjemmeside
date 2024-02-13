import React, { useContext } from "react";
import styled from "styled-components";
import {
	COLOR_CLAVE_PINK,
	COLOR_CLAVE_GREEN,
	COLOR_CLAVE_YELLOW,
} from "../colors";
import { ColorContext } from "./Layout";

const HamburgerMenuLink = ({
	href: href,
	children,
	className,
	active,
	...props
}) => {
	const { textColor } = useContext(ColorContext);

	return (
		<ColoredLink
			className={className}
			href={href}
			{...props}
			$textColor={textColor}
			$active={active}
		>
			{children}
		</ColoredLink>
	);
};

const ColoredLink = styled.a`
    color: ${(props) => props.$textColor || COLOR_CLAVE_GREEN};
    text-decoration: none;
    border-bottom: 1px solid ${(props) =>
			props.$active ? COLOR_CLAVE_YELLOW : COLOR_CLAVE_PINK};
    display: table;
    padding: 0.5rem 0;
  `;

export default HamburgerMenuLink;
