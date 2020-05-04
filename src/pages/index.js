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
  return (
    <div style={{ textAlign: 'center' }}>
      <StyledImg src={face} alt="My face" />
      <p>
        <b>Manikandan Sundararajan</b>
      </p>
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
