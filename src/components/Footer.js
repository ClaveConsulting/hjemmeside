import React, { useContext } from 'react';
import styled from 'styled-components';
import { Logo } from './Header';
import { onDesktop } from './Breakpoints';
import FooterLink from './FooterLink';
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
  <Aside {...props}>{children}</Aside>
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

const Footer = (props) => {
  const colorContext = useContext(ColorContext);

  const textColor = props.textColor || colorContext.textColor;
  const ClaveTriangle = styled.div`
    margin: 20px 0;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 16px solid ${textColor};
  `;
  const backgroundColor = props.backgroundColor || colorContext.backgroundColor;

  return (
    <FooterElement>
      <ColorContext.Provider value={{ textColor, backgroundColor }}>
        <Container>
          <FooterContentContainer>
            <FooterLogoWrapper>
              <Link to="/">
                <Logo width="100px" />
              </Link>
            </FooterLogoWrapper>
            <FooterContent>
              <FooterList>
                <FooterListItem>
                  <FooterLink to="/hva-vi-gjor">
                    <NoWrapText>Se hva vi gjør</NoWrapText>
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink to="/hvem-vi-er">
                    <NoWrapText>Se hvem vi er</NoWrapText>
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink to="/kontakt-oss">
                    <NoWrapText>Bli en av oss</NoWrapText>
                  </FooterLink>
                </FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem>
                  <FooterLink href="mailto:post@clave.no">
                    <NoWrapText>post@clave.no</NoWrapText>
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <NoWrapText>Kongens gate 12</NoWrapText>
                </FooterListItem>
                <FooterListItem>
                  <NoWrapText>0153 Oslo</NoWrapText>
                </FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem>
                  <FooterLink
                    href="https://www.facebook.com/ClaveConsulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink
                    href="https://www.instagram.com/claveconsulting/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <FooterLink
                    href="https://www.linkedin.com/company/clave-consulting-as/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </FooterLink>
                </FooterListItem>
                <FooterListItem>
                  <div style={{ width: '16px' }}>
                    <a
                      target="_blank"
                      rel="noopener"
                      href="https://storewebclaveplatformer.z16.web.core.windows.net/"
                    >
                      <ClaveTriangle />
                    </a>
                  </div>
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
