import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { MDXRenderer } from 'gatsby-mdx';

import Layout, { me } from './../components/Layout';

const StyledPostDate = styled.time`
  color: #999;
  font-weight: 400;
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  text-align: right;
`;

const PostTemplate = ({ data }) => {
  const { frontmatter, code } = data.mdx;
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
      {frontmatter.title && (
        <Helmet>
          <meta property="og:title" content={frontmatter.title} />
          <meta name="twitter:title" content={frontmatter.title} />
        </Helmet>
      )}
      {frontmatter.excerpt && (
        <Helmet>
          <meta property="og:description" content={frontmatter.excerpt} />
          <meta name="twitter:description" content={frontmatter.excerpt} />
        </Helmet>
      )}
      <h1
        style={{ textShadow: '2px 4px 0px ' + curColor, fontStyle: 'italic' }}
      >
        {frontmatter.title}
      </h1>
      <MDXRenderer>{code.body}</MDXRenderer>
      <StyledPostDate>{frontmatter.date}</StyledPostDate>
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        excerpt
      }
      code {
        body
      }
    }
  }
`;
