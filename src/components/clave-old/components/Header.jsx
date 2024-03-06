import React, { useContext, useState } from "react";
import styled, { css } from "styled-components";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from "../colors";
import { onDesktop, onMobile } from "./Breakpoints.jsx";
import ClaveLink from "./ClaveLink";
import HamburgerMenuLink from "./HamburgerMenuLink";
import {
	ColorContext,
	Container,
	DESKTOP_PADDING,
	MOBILE_PADDING,
} from "./Layout";
import ClaveLogo from "./icons/clave-logo.svg?react";
import hamburgerIcon from "./icons/hamburgermeny_ikon.svg?react";

const Header = (props) => {
	const {frontPage,
		useSkinColoredHamburgerMenu,
		uri,
		textColor = COLOR_CLAVE_PEACH} = props;

	const [menuExpanded, setMenuExpanded] = useState(false);

	const HamburgerMenyOptions = () => {
		const menuLinks = [
			{
				label: "Se hva vi gjør",
				href: "/hva-vi-gjor",
			},
			{
				label: "Se hvem vi er",
				href: "/hvem-vi-er",
			},
			{
				label: "Kontakt oss",
				href: "/kontakt-oss",
			},
		];

		return menuExpanded ? (
			<HamburgerDiv>
				{menuLinks.map(({ label, href }) => (
					<HamburgerMenuLink key={label} href={href} active={href === uri}>
						{label}
					</HamburgerMenuLink>
				))}
			</HamburgerDiv>
		) : null;
	};

	const HamburgerButton = () => {
		const ButtonComponent = useSkinColoredHamburgerMenu
			? SkinColorHamburgerButton
			: GreenColorHamburgerButton;
		return (
			<ButtonComponent
				aria-label="Meny"
				onClick={() => setMenuExpanded(!menuExpanded)}
			>
				<StyledHamburgerIcon />
			</ButtonComponent>
		);
	};

	const colorContext = useContext(ColorContext);

	const newColorContext = frontPage
		? {
				backgroundColor: "none",
				textColor: textColor,
		  }
		: colorContext;

	return (
		<ColorContext.Provider value={newColorContext}>
			<header>
				<Container>
					<Container.Content>
						<StyledHeader>
							<WrapperComponent
								$backgroundColor={newColorContext.backgroundColor}
							>
								<a aria-label="Forsiden til Clave.no" href="/">
									<Logo />
								</a>
								<InlineWrapper>
									<LinkComponent href="/hva-vi-gjor">
										Se hva vi gjør
									</LinkComponent>
									<LinkComponent href="/hvem-vi-er">
										Se hvem vi er
									</LinkComponent>
									<LinkComponent href="/kontakt-oss">Kontakt oss</LinkComponent>
								</InlineWrapper>
								<HamburgerButton />
							</WrapperComponent>
							<HamburgerMenyOptions />
						</StyledHeader>
					</Container.Content>
				</Container>
			</header>
		</ColorContext.Provider>
	);
};

const PADDING_TOP_DESKTOP = "4rem";
const PADDING_TOP_MOBILE = "1.5rem";

export const Logo = (props) => {
	const { textColor } = useContext(ColorContext);
	return <ColoredLogo {...props} $width={props.width} $textColor={textColor} />;
};

const HamburgerButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  ${onDesktop(`
    display: none;
  `)}
`;

const StyledHeader = styled.header(
	(props) => css`
    padding: 0 ${MOBILE_PADDING};
     ${onDesktop(`
      padding: 0 ${DESKTOP_PADDING};
   `)}`,
);

const SkinColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_PEACH};
`;

const GreenColorHamburgerButton = styled(HamburgerButton)`
  fill: ${COLOR_CLAVE_GREEN};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
${onDesktop(`
padding-top: ${PADDING_TOP_DESKTOP};
`)}
${onMobile(`
padding-top: ${PADDING_TOP_MOBILE};
`)}`;

const InlineWrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;
  width: 75%;
`;

const StyledHamburgerIcon = styled(hamburgerIcon)`
  width: 2rem;
  height: auto;
`;

const LinkComponent = styled(ClaveLink)`
    margin-left: 0.5rem;
    margin-right: 0.5rem;

    &:hover {
      -webkit-text-stroke-width: 1px;
    }
  `;

const WrapperComponent = styled(Wrapper)`
    background: ${(props) => props.$backgroundColor || COLOR_CLAVE_PEACH};
  `;

const ColoredLogo = styled(ClaveLogo)`
  width: ${(props) => props.$width || "5rem"};
  height: auto;
  fill: ${(props) => props.$textColor || COLOR_CLAVE_GREEN};
  `;

const HamburgerDiv = styled.div`
    padding-bottom: 2rem;
    ${onDesktop(`
      display: none;
    `)}`;

export default Header;
