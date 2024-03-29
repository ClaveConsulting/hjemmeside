import React from "react";
import { COLOR_CLAVE_GREEN, COLOR_CLAVE_PEACH } from "../../colors";
import { BackLink } from "../BackLink";
import Footer from "../Footer";
import Header from "../Header";
import Layout, { ColorContext } from "../Layout";
import ClaveInfo from "./ClaveInfo";
import ContactInfo from "./ContactInfo";
import SearchingForBanner from "./SearchingForBanner";

const RecruitmentTemplate = (props) => {
	const { positions, title } = props;

	return (
		<>
			<ColorContext.Provider
				value={{
					backgroundColor: COLOR_CLAVE_PEACH,
					textColor: COLOR_CLAVE_GREEN,
				}}
			>
				<main>
					<Header {...props} />
					{props.children}
					<ClaveInfo />
					<SearchingForBanner positions={positions} />
					<ContactInfo />
					<Layout asideContent={<BackLink href="/" />} />
				</main>
			</ColorContext.Provider>
			<ColorContext.Provider
				value={{
					backgroundColor: COLOR_CLAVE_GREEN,
					textColor: COLOR_CLAVE_PEACH,
				}}
			>
				<Footer />
			</ColorContext.Provider>
		</>
	);
};
export default RecruitmentTemplate;
