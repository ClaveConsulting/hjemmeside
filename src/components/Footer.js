import React, { useContext } from 'react';
import styled from 'styled-components';
import { Logo } from './Header';
import { onDesktop } from './Breakpoints';
import ClaveLink from './ClaveLink';
import { Link } from 'gatsby';
import {
  MOBILE_PADDING,
  Section,
  Aside,
  Container,
  ColorContext,
  DESKTOP_PADDING,
} from './Layout';

const FooterElement = styled.footer``;
const FooterList = styled.ul`
  margin: 0 1rem 1rem 0;
  list-style-type: none;
`;
const FooterListItem = styled.li`
  padding: 0;
`;

const FooterContentContainer = styled(Container.Content)`
  display: flex;
  flex-direction: column;
  padding: 6rem ${MOBILE_PADDING} 9rem;

  ${onDesktop(`
    padding: 6rem ${DESKTOP_PADDING} 9rem;
    flex-direction: row;
  `)}
`;

const FooterLogoWrapper = styled(({ children, ...props }) => (
  <Aside {...props}>
    {children}
  </Aside>
))`
  order: 0;
`;

const FooterContent = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${onDesktop(`
      flex-direction: row;
    `)}
`;

const NoWrapText = styled.span`
  white-space: nowrap;
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
                  <ClaveLink to="/hva-vi-gjor"><NoWrapText>Se hva vi gjør</NoWrapText></ClaveLink>
                </FooterListItem>
                <FooterListItem>
                  <ClaveLink to="/hvem-vi-er"><NoWrapText>Se hvem vi er</NoWrapText></ClaveLink>
                </FooterListItem>
                <FooterListItem>
                  <ClaveLink to="/kontakt-oss"><NoWrapText>Bli en av oss</NoWrapText></ClaveLink>
                </FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem>
                  <ClaveLink href="mailto:post@clave.no">
                    <NoWrapText>post@clave.no</NoWrapText>
                  </ClaveLink>
                </FooterListItem>
                <FooterListItem><NoWrapText>Øvre slottsgate 18-20</NoWrapText></FooterListItem>
                <FooterListItem><NoWrapText>0157 Oslo</NoWrapText></FooterListItem>
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
