import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout, { me } from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

const ProjectTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx;

  const randColors = [
    '#ff124f', // Bright red
    '#ff00a0', // Bright pink
    '#fe75fe', // Light pink
    '#1afe49', // Bright Green
    '#73fffe' // Light corral
  ];
  const curColor = randColors[Math.floor(Math.random() * randColors.length)];

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>
            {me.fancy} | {frontmatter.title}
          </title>
        </Helmet>
      )}
      <h1
        style={{ textShadow: '2px 4px 0px ' + curColor, fontStyle: 'italic' }}
      >
        {frontmatter.title}
      </h1>
      <ProjectLinks
        link={frontmatter.link}
        repo={frontmatter.repo}
        date={frontmatter.date}
        lang={frontmatter.lang}
      />
      <TextPostBody>
        <MDXRenderer>{body}</MDXRenderer>
      </TextPostBody>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        link
        repo
        date
        lang
      }
    }
  }
`;
