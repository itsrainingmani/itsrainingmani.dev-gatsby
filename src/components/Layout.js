import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
// import Dimensions from 'react-dimensions';

import 'prismjs/themes/prism-okaidia.css';
// import 'prismjs/themes/prism.css';

import Nav from './../components/Nav';
import Favicon from './../components/Favicon';

import GlobalStyle from './GlobalStyle';

export const me = {
  name: 'Manikandan Sundararajan',
  nick: 'Mani',
  fancy: 'Overthunk'
};

const Main = styled.main`
  max-width: 83rem;
  padding: 1em 1em 2em;
  margin: 0 auto;

  @media (min-width: 350px) {
    padding: 1em 1.5em 4em;
  }

  @media (min-width: 520px) {
    padding: 2rem 2em 6rem;
  }
`;

const StyledHeader = styled.header``;

const StyledTitle = styled.h1`
  // margin-bottom: 2rem;
  margin: 0.3em 0;

  @media (min-width: 350px) {
    margin: 0.5em 0 0.2em;
  }

  @media (min-width: 520px) {
    margin: 0.667em 0;
  }
`;

// '#ff124f', // Bright red
// '#ff00a0', // Bright pink
// '#fe75fe', // Light pink
// '#1afe49', // Bright Green
// '#73fffe'; // Light corral

const TitleLink = styled(Link)`
  @keyframes rainbow {
    0% {
      text-shadow: 2px 4px 0px #ff0000;
    }
    20% {
      text-shadow: 2px 4px 0px #ff00a0;
    }
    40% {
      text-shadow: 2px 4px 0px #fe75fe;
    }
    60% {
      text-shadow: 2px 4px 0px #1afe49;
    }
    80% {
      text-shadow: 2px 4px 0px #73fffe;
    }
    100% {
      text-shadow: 2px 4px 0px #ff0000;
    }
  }

  animation: rainbow 4s ease 2s infinite reverse;

  ${'' /* animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards; */}

  text-transform: lowercase;
  color: #000;
  text-decoration: none;
  border: none;
  text-shadow: 2px 4px 0px #ff0000;
  font-style: italic;

  &:hover {
    color: #3903fc;
  }
`;

const Layout = ({ children, title }) => {
  return (
    <Main>
      <GlobalStyle />
      <Favicon />

      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Rubik:700"
          rel="stylesheet"
        />
        <title>
          {me.fancy}
          {title ? ' - ' + title : ''}
        </title>
        <meta property="og:title" content={me.fancy} />
        <meta property="og:description" content="Mani's Super Cool Site™" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://itsrainingmani.dev" />
        <meta
          property="og:image"
          content="https://itsrainingmani.dev/social-meta.png"
        />
        <meta
          property="og:image:secure_url"
          content="https://itsrainingmani.dev/social-meta.png"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={me.fancy} />
        <meta name="twitter:description" content="Mani's Super Cool Site™" />
        <meta
          name="twitter:image"
          content="https://itsrainingmani.dev/social-meta.png"
        />
        <meta name="twitter:creator" content="@itsrainingmani" />
      </Helmet>

      <StyledHeader>
        <StyledTitle>
          <TitleLink to="/">{me.fancy}</TitleLink>
        </StyledTitle>

        <Nav />
      </StyledHeader>

      {children}
    </Main>
  );
};

export default Layout;
