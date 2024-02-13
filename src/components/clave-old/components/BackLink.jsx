import React from "react";
import styled from "styled-components";
import { LeftArrowLink } from "./ClaveLink";

export const BackLink = ({ href }) => {
	return (
		<Padder>
			<LeftArrowLink showOnMobile href={href}>
				Tilbake
			</LeftArrowLink>
		</Padder>
	);
};

const Padder = styled.div`padding-left: 40px;`;
