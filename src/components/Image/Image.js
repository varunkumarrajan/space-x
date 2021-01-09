// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';

// Styled image wrapper
const ImageWrapper = styled.img`
  background-color: #f1f1f1;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;

/**
 * @description Load image
 * @param {object} { content }
 */
const Image = ({ content }) => (
  <ImageWrapper title={content.alt} alt={content.alt} src={content.src} />
);

// Default export
export default Image;

// Default props
Image.defaultProps = {
  content: {
    alt: '',
    src: '',
  }
};

// Prop types
Image.propTypes = {
  content: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
};
