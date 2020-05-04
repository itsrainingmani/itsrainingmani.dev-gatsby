import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

import Layout, { me } from './../components/Layout';
import TextPostBody from './../components/TextPostBody';
import ProjectLinks from './../components/ProjectLinks';

const ProjectTemplate = ({ data }) => {
  const { frontmatter, code } = data.mdx;

  const randColors = ['#ff124f', '#ff00a0', '#fe75fe', '#7a04eb', '#73fffe'];
  const curColor = randColors[Math.floor(Math.random() * randColors.length)];

  return (
    <Layout>
      {frontmatter.title && (
        <Helmet>
          <title>
            {me.name} | {frontmatter.title}
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
        <MDXRenderer>{code.body}</MDXRenderer>
      </TextPostBody>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      code {
        body
      }
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
