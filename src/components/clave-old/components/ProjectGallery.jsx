import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./Layout";

const GalleryImageWithSubtext = ({ image, children, alt }) => {
	return (
		<GalleryImageContainer>
			<ImageWrapper>
				<ProjectGalleryImage alt={alt} width="833" height="566" src={image} />
			</ImageWrapper>
			{children}
		</GalleryImageContainer>
	);
};

const LeftTextWrapper = styled.div`
    width: 95%;
    @media screen and (min-width: 720px) {
    width: 50%;
    position: static;
  }
`;
const LeftTextItem = styled.div`
    padding-bottom: 20px;
`;

const RightTextWrapper = styled.div`
    width: 95%;
    @media screen and (min-width: 720px) {
    width: 80%;
    position: static;
  }`;

export const ProjectGallery = ({
	leftImg,
	rightImg,
	methodology,
	technology,
	finalText,
	imageSpacing = 300,
}) => {
	const [firstSectionHeight, setFirstSectionHeight] = useState(0);
	const firstSectionRef = useRef(null);

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		const onResize = (_) =>
			setFirstSectionHeight(firstSectionRef.current.clientHeight);
		window.addEventListener("resize", onResize);
		setFirstSectionHeight(firstSectionRef.current.clientHeight);
		return () => window.removeEventListener("resize", onResize);
	}, [firstSectionRef]);

	return (
		<GalleryContainer>
			<FirstImage ref={firstSectionRef} height={firstSectionHeight}>
				<GalleryImageWithSubtext image={leftImg} alt="FirstImage">
					<LeftTextWrapper>
						{methodology ? (
							<LeftTextItem>
								<h2>Metodologi</h2>
								<p>{methodology}</p>
							</LeftTextItem>
						) : null}
						{technology ? (
							<LeftTextItem>
								<h2>Teknologi</h2>
								<p>{technology}</p>
							</LeftTextItem>
						) : null}
					</LeftTextWrapper>
				</GalleryImageWithSubtext>
			</FirstImage>
			<SecondImage
				desktopTopMargin={-Math.max(0, firstSectionHeight - imageSpacing)}
			>
				<GalleryImageWithSubtext image={rightImg} alt="SecondImage">
					<RightTextWrapper>
						<p>{finalText}</p>
					</RightTextWrapper>
				</GalleryImageWithSubtext>
			</SecondImage>
		</GalleryContainer>
	);
};

const GalleryContainer = (props) => {
	return (
		<Container>
			<ContainerPadding {...props} />
		</Container>
	);
};

const GalleryImageContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const FirstImage = styled.div`
    @media screen and (min-width: 720px) {
  width: 62%;
  position: relative;
  float: left;
  }
`;
const SecondImage = ({ children, desktopTopMargin }) => {
	const SectionStyle = styled.div`
        @media screen and (min-width: 720px) {
            width: 60%;
            position: relative;
            float: right;
            margin-top: ${desktopTopMargin}px
        }`;

	return (
		<SectionStyle $desktopMargin={desktopTopMargin}>{children}</SectionStyle>
	);
};

const ImageWrapper = styled.div`
    padding-bottom: 60px;
  `;
const ContainerPadding = styled.div`
      padding-left: 64px;
      position: relative;
      overflow: hidden;
      padding-bottom: 64px;
  `;

const imageStyleProjectGalleryImage = `
  display: block;
  width: 100%;
  height: auto;
  margin: 0;
`;

const ProjectGalleryImage = styled.img`
  ${imageStyleProjectGalleryImage}
`;
