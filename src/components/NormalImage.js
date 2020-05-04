import React from 'react';
import styled from 'styled-components';

const StyledFigcaption = styled.figcaption`
  text-align: center;
  font-size: 0.8em;
  padding 0.25em 0;
  color: #999;
`;

const NormalImage = ({ src, alt, caption }) => {
  return (
    <figure>
      <img src={src} alt={alt || caption} style={{ width: '100%' }} />
      {caption && <StyledFigcaption>{alt || caption}</StyledFigcaption>}
    </figure>
  );
};

export default NormalImage;
