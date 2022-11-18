import React from 'react';
import Layout from '../Layout';
import { Ingress } from '../Ingress';
import styled from 'styled-components';

const Phone = styled.span`
  white-space: nowrap;
`;

const ContactInfo = () => {
  return (
    <Layout>
      <Ingress>
        Ønsker du å stille oss flere spørsmål? <br /> Ring Terje på{' '}
        <Phone>+47 975 37 841</Phone> eller send oss en{' '}
        <a href="mailto:jobb@clave.no">mail</a>.
      </Ingress>
    </Layout>
  );
};

export default ContactInfo;
