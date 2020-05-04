import React from 'react';
import styled from 'styled-components';

import Layout from './../components/Layout';
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

const MainFace = () => {
  const randColors = [
    '#ff124f', // Bright red
    '#ff00a0', // Bright pink
    '#fe75fe', // Light pink
    '#1afe49', // Bright Green
    '#73fffe' // Light corral
  ];
  const curColor = randColors[Math.floor(Math.random() * randColors.length)];
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledImg src={face} alt="My face" />
      <h3>
        <b>Manikandan Sundararajan</b>
      </h3>
      <h4
        style={{ textShadow: '2px 2px 0px ' + curColor, fontStyle: 'italic' }}
      >
        Software Dev | Keyboard Nerd
      </h4>
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
