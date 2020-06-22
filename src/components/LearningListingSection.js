import React from 'react';
import styled from 'styled-components';
import LearningListing from './LearningListing';

const StyledListingSection = styled.section`
	margin-bottom: 2em;
`;
const StyledSectionHeading = styled.h2`
	margin-bottom: 0;
`;

const LearningListingSection = ({ projects, sectionTitle }) => {
	return projects.length > 0 ? (
		<StyledListingSection>
			<StyledSectionHeading>{sectionTitle}</StyledSectionHeading>
			<LearningListing posts={projects} />
		</StyledListingSection>
	) : null;
};

export default LearningListingSection;
