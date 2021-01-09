// React
import React from 'react';
// Prop Types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';

// Styled header wrapper
const HeaderWrapper = styled.header`
  font-size: 24px;
  font-weight: bolder;
  margin: 0 10px;
`;

/**
 * @description html semantic header
 * @param {object} {content}
 */
const Header = ({ content }) => (
  <HeaderWrapper data-testid="headerId">{content.heading}</HeaderWrapper>
);

// Default header
export default Header;

// Default props
Header.defaultProps = {
  content: {
    heading: '',
  },
};
// Prop types
Header.propTypes = {
  content: PropTypes.shape({
    heading: PropTypes.string.isRequired,
  }).isRequired,
};
