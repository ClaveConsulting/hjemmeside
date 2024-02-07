import '../layout.css';
import React from "react";
import styled from 'styled-components';
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from '../../colors';

export const MAX_WIDTH = '120rem';
export const MOBILE_PADDING = '3rem';
export const DESKTOP_PADDING = '6rem';

const MidSplitLayout = props => {
  const { image } = props;

  return (
    <Wrapper>
      <Content>
      <Left>
          <StyledMidSplitLayoutImage alt="" src={image} />
      </Left>
      <Right>{props.children}</Right>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`

  background-color: ${COLOR_CLAVE_PEACH};
  color: ${COLOR_CLAVE_GREEN};
`;

const imageStyle = `
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
  
  @media screen and (min-width: 720px) {
    width: 100%;
    margin-left: auto;
  }
`;

const StyledMidSplitLayoutImage = styled.img`
    ${imageStyle}
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: ${MAX_WIDTH};
  margin: 0 auto;

  @media screen and (min-width: 720px) {
    grid-template-columns: 1fr 1fr;
  }`

const Left = styled.div`
  height: 400px;
`;

const Right = styled.div`
padding: ${MOBILE_PADDING};

@media screen and (min-width: 720px) {
  padding: 0 ${DESKTOP_PADDING} 0 6rem;
}`

export default MidSplitLayout;
