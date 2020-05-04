import React from 'react';
import styled from 'styled-components';

import Layout, { rainbowAnimation } from './../components/Layout';
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

const Index = () => (
  <Layout>
    <StyledContainer>
      <MainFace />
    </StyledContainer>
  </Layout>
);

export default Index;
