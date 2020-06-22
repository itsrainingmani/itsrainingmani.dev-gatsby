import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import LearningListingSection from './../components/LearningListingSection';

const learningTypes = {
	clojure: 'Clojure',
	cs: 'CS Fundamentals'
};

const LearningPageInner = props => {
	try {
		const allProjects = props.data.allMdx ? props.data.allMdx.edges : [];
		console.log(allProjects);

		const randColors = [
			'#ff124f', // Bright red
			'#ff00a0', // Bright pink
			'#fe75fe', // Light pink
			'#1afe49', // Bright Green
			'#73fffe' // Light corral
		];
		const curColor = randColors[Math.floor(Math.random() * randColors.length)];

		// const personalProjects = allProjects.filter(
		// 	project => project.node.fields.projectType === 'personal'
		// );

		// const professionalProjects = allProjects.filter(
		// 	project => project.node.fields.projectType === 'professional'
		// );

		const diffLearningPosts = {};
		for (const key of Object.keys(learningTypes)) {
			diffLearningPosts[key] = allProjects.filter(
				project => project.node.fields.learningType === key
			);
		}

		return (
			<div>
				<h1
					style={{ textShadow: '2px 4px 0px ' + curColor, fontStyle: 'italic' }}
				>
					Learning in Public
				</h1>
				{/* {personalProjects.length > 0 && (
					<ProjectListingSection
						projects={personalProjects}
						sectionTitle="Personal"
					/>
				)}

				{professionalProjects.length > 0 && (
					<ProjectListingSection
						projects={professionalProjects}
						sectionTitle="Professional"
					/>
				)} */}
				{Object.entries(diffLearningPosts).map(([key, value]) => {
					if (value.length > 0) {
						return (
							<LearningListingSection
								projects={value}
								sectionTitle={learningTypes[key]}
							/>
						);
					} else {
						return null;
					}
				})}
			</div>
		);
	} catch (e) {
		console.log(e);
		return <h2>No Learning in Public Projects</h2>;
	}
};

const LearningPage = props => {
	return (
		<Layout>
			<LearningPageInner {...props} />
		</Layout>
	);
};

export default LearningPage;

export const query = graphql`
	query {
		allMdx(
			filter: {
				frontmatter: { publish: { eq: true } }
				fields: { type: { eq: "learning" } }
			}
			sort: { fields: [frontmatter___date], order: DESC }
		) {
			edges {
				node {
					frontmatter {
						title
						date
					}
					fields {
						slug
						learningType
					}
				}
			}
		}
	}
`;
