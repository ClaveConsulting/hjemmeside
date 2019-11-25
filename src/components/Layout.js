import './layout.css';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_SKIN, COLOR_CLAVE_GREEN } from '../colors';
import { onDesktop } from './Breakpoints';

export const Container = props => {
  const { backgroundColor, textColor } = useContext(ColorContext);

  const ColoredContainer = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return <ColoredContainer {...props} />;
};

export const MAX_WIDTH = 1920;

Container.Content = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
`;

export const MOBILE_PADDING = '1em';

export const DESKTOP_PADDING_VERTICAL = '3em';

export const Section = styled.section`
  max-width: 1280px;
  padding: ${MOBILE_PADDING};

  ${onDesktop(`
    flex: 1 1 1280px;
    padding: 1em ${DESKTOP_PADDING_VERTICAL} 1em;
  `)}
`;

export const Aside = styled.aside`
  flex: 1 0 40%;
  order: 1;
  display: flex;

  ${onDesktop(`
    order: 0;
    padding-top: ${DESKTOP_PADDING_VERTICAL};
    padding-bottom: ${DESKTOP_PADDING_VERTICAL};
  `)}
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${onDesktop(`
    flex-direction: row;
  `)}
`;

export const ColorContext = React.createContext({
  backgroundColor: COLOR_CLAVE_SKIN,
  textColor: COLOR_CLAVE_GREEN,
});

const Layout = ({ asideContent, children, className }) => {
  return (
    <Container className={className}>
      <Container.Content>
        <LayoutWrapper>
          <Aside>{asideContent}</Aside>
          <Section>{children}</Section>
        </LayoutWrapper>
      </Container.Content>
    </Container>
  );
};

export default Layout;
