import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';

import Layout, { rainbowAnimation } from './../components/Layout';
import BlogListing from './../components/BlogListing';

import face from './../../static/face.png';

const StyledContainer = styled.div`
  height: 350px;

  @media (min-width: 520px) {
    height: 400px;
  }

  @media (min-width: 1400px) {
    height: 500px;
  }
`;

const StyledImg = styled.img`
  height: 'auto';
  width: 20rem;
  border-radius: 30%;

  @media (max-width: 520px) {
    width: 10rem;
  }
`;

const StyledH4 = styled.h4`
  animation: ${rainbowAnimation(2)} 4s ease 2s infinite reverse;
  font-style: italic;
  text-shadow: 2px 2px 0px #ff0000;
`;

const StyledH2 = styled.h2`
  margin-top: 4rem;
  animation: ${rainbowAnimation(3)} 4s ease 2s infinite reverse;
  font-style: italic;
  text-shadow: 2px 3px 0px #ff0000;
`;

const BlogPageInner = props => {
  try {
    const posts = props.data.allMdx ? props.data.allMdx.edges : [];
    return <BlogListing posts={posts} />;
  } catch (e) {
    return <h2>Unable to find any blog posts.</h2>;
  }
};

const MainFace = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledImg src={face} alt="My face" />
      <h3>
        <b>Manikandan Sundararajan</b>
      </h3>
      <StyledH4>Software Dev | Keyboard Nerd</StyledH4>
      <blockquote style={{ fontStyle: 'italic' }}>
        "Some one once told me that I did a good job. <br />
        I've been chasing that high ever since"
      </blockquote>
    </div>
  );
};

const Index = props => (
  <Layout>
    <StyledContainer>
      <MainFace />
      <StyledH2>Posts</StyledH2>
      <BlogPageInner {...props} />
    </StyledContainer>
  </Layout>
);

export default Index;

export const query = graphql`
  query {
    allMdx(
      filter: {
        frontmatter: { publish: { eq: true } }
        fields: { type: { eq: "post" } }
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
          }
        }
      }
    }
  }
`;
