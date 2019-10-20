import React from 'react';
import styled from 'styled-components';
import {
  COLOR_CLAVE_LIGHTBLUE,
  COLOR_CLAVE_BLAA,
  COLOR_CLAVE_SKIN,
} from '../colors';
import Layout, { onDesktop } from './Layout';
import CtaLink from './CtaLink';
import { Link } from 'gatsby';

const PaddedLayout = styled(Layout)`
  padding-top: 2em;

  ${onDesktop(`
    padding-top: 3em;
  `)}
`;

const JoinGallery = () => (
  <Gallery>
    <GalleryImage
      alt="Anniken"
      width="406"
      height="206"
      src="https://placehold.it/406x266/000/fff"
    />
    <Karine
      alt="Karine"
      width="192"
      height="261"
      src="https://placehold.it/192x261/aa3/fff"
    />
  </Gallery>
);

const JoinContent = () => (
  <div>
    <h3>Bli en av oss</h3>
    <BannerP>
      Vi mener det er godt og litt annerledes å være en Claver. Vi føler en
      tilhørlighet både til selskapet og til kollegaene våre. Fordi vi er
      ansatteid er det også vi som bestemmer.
    </BannerP>
    <PositionUl>
      <PositionLink to="/">Senior UX designer</PositionLink>
      <PositionLink to="/">Senior utvikler</PositionLink>
      <PositionLink to="/">UX deltid</PositionLink>
      <PositionLink to="/">Utvikler sommerjobb</PositionLink>
    </PositionUl>
    <ContactLinkContainer>
      <ContactLink to="/">Ta kontakt for en prat!</ContactLink>
    </ContactLinkContainer>
  </div>
);

const JoinBanner = () => (
  <PaddedLayout
    backgroundColor={COLOR_CLAVE_LIGHTBLUE}
    asideContent={
      <GalleryContainer>
        <JoinGallery />
      </GalleryContainer>
    }
  >
    <JoinContent />
  </PaddedLayout>
);

const BORDER_COLOR = COLOR_CLAVE_SKIN;

const ContactLinkContainer = styled.div`
  margin-bottom: 3em;

  ${onDesktop(`
    margin-bottom: 0;
  `)}
`;

const ContactLink = styled(CtaLink)`
  border-bottom-color: ${BORDER_COLOR};
`;

const sectionSpacing = `
&:not(:last-child) {
  margin-bottom: 3em;
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

const PositionLinkInner = styled(Link)`
  padding: 0.75em 0;
  display: block;
  border: none;
  text-decoration: none;

  &,
  &:visited {
    color: ${COLOR_CLAVE_BLAA};
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const Gallery = styled.div`
  flex: 1 0 auto;
  margin-top: 1em;
  position: relative;
  left: 1em;

  ${onDesktop(`
    width: 100%;
    position: static;
  `)}
`;

const GalleryImage = styled.img`
  display: block;
  margin: 0;
  width: 100%;
  height: auto;
`;

const Karine = styled(GalleryImage)`
  margin-right: 11%;
  margin-left: auto;
  margin-top: -20%;
  width: ${(100 * 192) / 406}%;
`;

export default JoinBanner;
