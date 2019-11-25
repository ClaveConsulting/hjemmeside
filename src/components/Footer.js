import React, { useContext } from 'react';
import styled from 'styled-components';
import { Logo, LogoWrapper } from './Header';
import { onDesktop } from './Breakpoints';
import ClaveLink from './ClaveLink';
import { Link } from 'gatsby';
import {
  MOBILE_PADDING,
  Section,
  Aside,
  Container,
  ColorContext,
} from './Layout';

const FooterElement = styled.footer``;
const FooterList = styled.ul`
  margin: 0 0 1em 0;
  list-style-type: none;
`;
const FooterListItem = styled.li`
  padding: 0;
`;

const FooterContentContainer = styled(Container.Content)`
  padding-top: 2em;
  display: flex;
  flex-direction: column;

  ${onDesktop(`
    flex-direction: row;
  `)}
`;

const FooterLogoWrapper = styled(({ children, ...props }) => (
  <Aside {...props}>
    <LogoWrapper>{children}</LogoWrapper>
  </Aside>
))`
  order: 0;
  padding: ${MOBILE_PADDING};
`;

const FooterContent = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${onDesktop(`
      flex-direction: row;
    `)}
`;

const Footer = props => {
  const colorContext = useContext(ColorContext);

  const textColor = props.textColor || colorContext.textColor;
  const backgroundColor = props.backgroundColor || colorContext.backgroundColor;

  return (
    <FooterElement>
      <ColorContext.Provider value={{ textColor, backgroundColor }}>
        <Container>
          <FooterContentContainer>
            <FooterLogoWrapper>
              <Link to="/">
                <Logo />
              </Link>
            </FooterLogoWrapper>
            <FooterContent>
              <FooterList>
                <FooterListItem>
                  <ClaveLink to="/hva-vi-gjor">Se hva vi gjør</ClaveLink>
                </FooterListItem>
                <FooterListItem>
                  <ClaveLink to="/hvem-vi-er">Se hvem vi er</ClaveLink>
                </FooterListItem>
                <FooterListItem>
                  <ClaveLink to="/kontakt-oss">Bli en av oss</ClaveLink>
                </FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem>
                  <ClaveLink href="mailto:post@clave.no">
                    post@clave.no
                  </ClaveLink>
                </FooterListItem>
                <FooterListItem>Øvre slottsgate 18-20</FooterListItem>
                <FooterListItem>0157 Oslo</FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem>
                  <ClaveLink
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </ClaveLink>
                </FooterListItem>
                <FooterListItem>
                  <ClaveLink
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </ClaveLink>
                </FooterListItem>
              </FooterList>
            </FooterContent>
          </FooterContentContainer>
        </Container>
      </ColorContext.Provider>
    </FooterElement>
  );
};

export default Footer;
