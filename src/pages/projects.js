import React from 'react';
import { graphql } from 'gatsby';

import Layout from './../components/Layout';
import ProjectListing from './../components/ProjectListing';

const ProjectsPageInner = props => {
  try {
    const allProjects = props.data.allMdx ? props.data.allMdx.edges : [];

    return (
      <div>
        <h1>Projects</h1>
        <ProjectListing projects={allProjects} />
      </div>
    );
  } catch (e) {
    console.log(e);
    return <h2>Unable to find any projects.</h2>;
  }
};

const ProjectsPage = props => {
  return (
    <Layout title="Projects">
      <ProjectsPageInner {...props} />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "project" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            lede
          }
          fields {
            slug
            projectType
          }
        }
      }
    }
  }
`;
