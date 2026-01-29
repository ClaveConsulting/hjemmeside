import React from "react";
import styled from "styled-components";
import { Ingress } from "../Ingress";
import Layout from "../Layout";

const Phone = styled.span`
  white-space: nowrap;
`;

const ContactInfo = () => {
	return (
		<Layout>
			<Ingress>
				Ønsker du å stille oss flere spørsmål? <br /> Ring Karine på{" "}
				<Phone>+47 913 23 235</Phone> eller send oss en{" "}
				<a href="mailto:jobb@clave.no">mail</a>.
			</Ingress>
		</Layout>
	);
};

export default ContactInfo;
