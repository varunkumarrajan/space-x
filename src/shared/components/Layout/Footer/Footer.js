// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';

// Styled footer wrapper
const FooterWrapper = styled.footer`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

// Styled footer small wrapper
const FooterSmallWrapper = styled.div`
  display: inline-block;
`;

/**
 * @description html semantic Footer
 * @param {object} {content}
 */
const Footer = ({ content }) => (
  <FooterWrapper data-testid="footerId">
    {content.title}: <FooterSmallWrapper data-testid="footerChildId">{content.name}</FooterSmallWrapper>
  </FooterWrapper>
);

// Default footer
export default Footer;

// Default props
Footer.defaultProps = {
  content: {
    title: '',
    name: '',
  },
};

// Prop types
Footer.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
