import React from 'react';
import styled from 'styled-components';

import './layout.css';
import { COLOR_CLAVE_SKIN, COLOR_CLAVE_GREEN } from '../colors';

export const onDesktop = styles => `@media screen and (min-width: 720px) {
  ${styles}
}`;

export const Container = styled.div``;

Container.Content = styled.div`
  margin: 0 auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column;

  ${onDesktop(`
    flex-direction: row;
  `)}
`;

export const MOBILE_PADDING = '1em';

export const Section = styled.section`
  max-width: 1280px;
  padding:  ${MOBILE_PADDING};

  ${onDesktop(`
    flex: 1 1 1280px;
    padding: 1em 3em 1em;
  `)}
`;

export const Aside = styled.aside`
  flex: 1 0 40%;
  order: 1;
  display: flex;

  ${onDesktop(`
    order: 0;
  `)}
`;

const Layout = ({
  backgroundColor = COLOR_CLAVE_SKIN,
  textColor = COLOR_CLAVE_GREEN,
  asideContent,
  children,
  className,
}) => {
  const ColoredContainer = styled(Container)`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return (
    <ColoredContainer className={className}>
      <Container.Content>
        <Aside>{asideContent}</Aside>
        <Section>{children}</Section>
      </Container.Content>
    </ColoredContainer>
  );
};

export default Layout;
