import React from 'react';
import styled from 'styled-components';

import { onDesktop, MOBILE_PADDING, Container } from './Layout';

const PageHeaderWithoutImage = ({title}) => {
    return (
        <Container>
            <PageHeaderWrapper>
                <MyH1>{title}</MyH1>
            </PageHeaderWrapper>
        </Container>
    );
};

const MyH1 = styled.h1`
    margin-bottom: 0;
`;

const PageHeaderWrapper = styled(Container.Content)`
  margin: 0 auto;

  ${onDesktop(`
    text-align: center;
  `)};

  padding: 0 0 0 ${MOBILE_PADDING};

  ${onDesktop(`
    padding-left: 0;
  `)}
`;


export default PageHeaderWithoutImage;
