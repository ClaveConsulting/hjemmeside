import React from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_LIGHTBLUE, COLOR_CLAVE_SKIN } from '../colors';
import Layout, { ColorContext } from './Layout';
import CtaLink from './CtaLink';
import { Gallery, GalleryImage } from './Gallery';
import { onDesktop } from './Breakpoints';

const JoinContent = ({ dontShowLink = false, showStillingsannonser = true }) => (
  <div>
    <h3>Bli en av oss</h3>
    <BannerP>
      Det er godt og litt annerledes å være en Claver. Vi føler en tilhørighet
      både til selskapet og til kollegaene våre. Fordi vi eies av de ansatte er
      vi alle med og bestemmer.
    </BannerP>
    {
      showStillingsannonser ?
        <PositionUl>
          <PositionLink href="https://www.poption.com/companies/clave/postings/wYDf5q">Senior UX designer</PositionLink>
          <PositionLink href="https://www.poption.com/companies/clave/postings/wrLfxm">Senior utvikler</PositionLink>
          <PositionLink href="https://www.poption.com/companies/clave/postings/08Of7G">UX deltid</PositionLink>
          <PositionLink href="https://www.poption.com/companies/clave/postings/w42fN5">Nyutdannede
            utviklere </PositionLink>
        </PositionUl> :
        <>
          <BannerP>
            Vi er alltid på utkikk etter flinke folk som deler vårt engasjement for design og utvikling. Vi oppfordrer
            deg
            til å sende oss en åpen søknad til post@clave.no
          </BannerP>
          <PositionUl>
            <PositionLink href="https://www.poption.com/companies/clave/postings/pBGf7n">Sommerjobb 2021</PositionLink>
          </PositionUl>
        </>
    }
    {
      !dontShowLink &&
      <ContactLinkContainer>
        <ContactLink to="/kontakt-oss">Ta kontakt for en prat!</ContactLink>
      </ContactLinkContainer>
    }
  </div>
);

const JoinBannerWrapper = styled(Layout)`
  padding-top: 2rem;

  ${onDesktop(`
    padding-top: 3rem;
  `)}
`;

const JoinBanner = ({ images, dontShowLink = false }) => (
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
      <JoinContent dontShowLink={dontShowLink} showStillingsannonser={false} />
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: none;
  text-decoration: none;
  font-size: 24px;

  & {
    color: ${COLOR_CLAVE_GREEN};
  }
  &:visited {
  }
  &:hover {
    color: ${BORDER_COLOR};
    text-decoration: underline;
  }
  &:hover:after {
    content: '';
    display: block;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 20px solid ${BORDER_COLOR};
    transform: scaleX(0.75) scaleY(0.75);
  }
`;

export default JoinBanner;
