// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types';
// Styled component
import styled from 'styled-components';
// Components
import Header from './Header/Header';
import Footer from './Footer/Footer';
// Device
import device from 'config/BreakPoints';

// Styled main wrapper
const MainWrapper = styled.main`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  @media screen and ${device.mobile} {
    flex-flow: row wrap;
  }
`;

/**
 * @description Layout
 * @param {object} { children, content: { header, footer} }
 */
const Layout = ({ children, content: { header, footer } }) => (
  <React.Fragment>
    <Header content={header} />
    <MainWrapper data-testid="mainId">{children}</MainWrapper>
    <Footer content={footer} />
  </React.Fragment>
);

// Default layout
export default Layout;

// Default props
Layout.defaultProps = {
  children: '',
  content: {
    header: {},
    footer: {},
  },
};

// Prop types
Layout.propTypes = {
  children: PropTypes.any.isRequired,
  content: PropTypes.shape({
    header: PropTypes.object,
    footer: PropTypes.object,
  }).isRequired,
};
