import './layout.css';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { COLOR_CLAVE_SKIN, COLOR_CLAVE_GREEN } from '../colors';
import { onDesktop } from './Breakpoints';

export const MAX_WIDTH = 1920;
export const MOBILE_PADDING = '1.875em';
export const DESKTOP_PADDING = '5em';

export const Container = props => {
  const { backgroundColor, textColor } = useContext(ColorContext);

  const ColoredContainer = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  return <ColoredContainer {...props} />;
};

Container.Content = styled.div`
  margin: 0 auto;
  max-width: ${MAX_WIDTH}px;
`;

export const Section = styled.section`
  max-width: 1280px;

  ${onDesktop(`
    flex: 1 1 1280px;
  `)}
`;

export const Aside = styled.aside`
  flex: 1 0 40%;
  order: 1;
  display: flex;
  padding: ${MOBILE_PADDING} 0;

  ${onDesktop(`
    order: 0;
    padding: 0 ${DESKTOP_PADDING} 0 0;
  `)}
`;

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${MOBILE_PADDING};

  ${onDesktop(`
    padding: ${DESKTOP_PADDING}
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
