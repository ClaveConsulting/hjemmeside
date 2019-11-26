import React from 'react';
import styled from 'styled-components';
import {
  COLOR_CLAVE_LIGHTBLUE,
  COLOR_CLAVE_BLAA,
  COLOR_CLAVE_SKIN,
  COLOR_CLAVE_GREEN,
} from '../colors';
import Layout, { ColorContext } from './Layout';
import CtaLink from './CtaLink';
import { Link } from 'gatsby';
import { Gallery, GalleryImage } from './Gallery';
import { onDesktop } from './Breakpoints';

const JoinContent = ({showLink = false}) => (
  <div>
    <h3>Bli en av oss</h3>
    <BannerP>
      Vi mener det er godt og litt annerledes å være en Claver. Vi føler en
      tilhørlighet både til selskapet og til kollegaene våre. Fordi vi er
      ansatteid er det også vi som bestemmer.
    </BannerP>
    <PositionUl>
      <PositionLink href="https://www.poption.com/companies/clave/postings/wYDf5q">Senior UX designer</PositionLink>
      <PositionLink href="https://www.poption.com/companies/clave/postings/wrLfxm">Senior utvikler</PositionLink>
      <PositionLink href="https://www.poption.com/companies/clave/postings/08Of7G">UX deltid</PositionLink>
      <PositionLink href="https://www.poption.com/companies/clave/postings/w42fN5">Nyutdannede utviklere </PositionLink>
    </PositionUl>
      {showLink == false ?
          <ContactLinkContainer>
            <ContactLink to="/kontakt-oss">Ta kontakt for en prat!</ContactLink>
          </ContactLinkContainer>
          : null
      }
  </div>
);

const JoinBannerWrapper = styled(Layout)`
  padding-top: 2rem;

  ${onDesktop(`
    padding-top: 3rem;
  `)}
`;

const JoinBanner = ({ images, showLink = false }) => (
  <ColorContext.Provider
    value={{
      backgroundColor: COLOR_CLAVE_LIGHTBLUE,
      textColor: COLOR_CLAVE_GREEN,
    }}
  >
    <JoinBannerWrapper
      asideContent={
        <Gallery>
          <GalleryImage
            alt="Anniken"
            width="406"
            height="206"
            fluidImage={images.anniken}
          />
          <GalleryImage
            alt="Karine"
            width="192"
            height="261"
            fluidImage={images.karine}
          />
        </Gallery>
      }
    >
      <JoinContent showLink={showLink}/>
    </JoinBannerWrapper>
  </ColorContext.Provider>
);

const BORDER_COLOR = COLOR_CLAVE_SKIN;

const ContactLinkContainer = styled.div`
  margin-bottom: 3rem;

  ${onDesktop(`
    margin-bottom: 0;
  `)}
`;

const ContactLink = styled(CtaLink)`
  border-bottom-color: ${BORDER_COLOR};
`;

const sectionSpacing = `
&:not(:last-child) {
  margin-bottom: 3rem;
}`;

const BannerP = styled.p`
  ${sectionSpacing}
`;

const PositionUl = styled.ul`
  list-style-type: none;
  margin-left: 0;

  ${sectionSpacing}
`;

const PositionLink = props => (
  <PositionLi>
    <PositionLinkInner {...props} />
  </PositionLi>
);

const PositionLi = styled.li`
  border-top: 1px solid ${BORDER_COLOR};
  margin: 0;

  &:last-child {
    border-bottom: 1px solid ${BORDER_COLOR};
  }
`;

const PositionLinkInner = styled.a`
  padding: 0.75em 0;
  display: block;
  border: none;
  text-decoration: none;

  &,
  &:visited {
    color: ${COLOR_CLAVE_BLAA};
  }
`;

export default JoinBanner;
