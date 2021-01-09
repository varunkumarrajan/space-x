// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';
// Component
import Image from 'components/Image/Image';
// Device
import device from 'config/BreakPoints';

// Styled card wrapper
const CardWrapper = styled.div`
  background-color: #ffffff;
  margin: 10px;
  padding: 20px;
  transition: 0.3s;

  @media screen and ${device.mobile} {
    width: calc(100% - 20px);
  }

  @media screen and ${device.tablet} {
    width: calc(50% - 20px);
  }

  @media screen and ${device.desktop} {
    width: calc(25% - 20px);
  }

  @media screen and ${device.desktopL} {
    width: calc(25% - 20px);
  }
`;

// Styled card content
const CardContent = styled.div`
  padding-top: 10px;
`;

// Styled card heading
const CardHeading = styled.p`
  color: #398fd8;
  font-size: 18px;
  font-weight: bold;
`;

// Styled card details
const CardDetails = styled.div`
  margin: 5px 0;
`;

// Styled card list
const CardList = styled.ul`
  padding-left: 30px;
`;

// Styled card bold subheading
const CardBoldSubHeading = styled.span`
  font-weight: bold;
`;

// Styled card sub heading
const CardSubHeading = styled.span`
  margin-left: 10px;
`;

/**
 * @description Card component have an image, heading and subheading & styled card component with styled component
 * @param {object} { content }
 */
const Card = ({ content }) => (
  <CardWrapper>
    <Image
      content={{
        alt: content.alt,
        src: content.src,
      }}
    />
    <CardContent>
      <CardHeading>{content.missionName}</CardHeading>
      <CardDetails>
        <CardBoldSubHeading>{content.labels.missionId}:</CardBoldSubHeading>
        <CardSubHeading>
          <CardList>
            {content.missionIds &&
              content.missionIds.length !== 0 &&
              content.missionIds.map((id, ind) => <li key={ind}>{id}</li>)}
          </CardList>
        </CardSubHeading>
      </CardDetails>
      <CardDetails>
        <CardBoldSubHeading>{content.labels.year}:</CardBoldSubHeading>
        <CardSubHeading>{content.year}</CardSubHeading>
      </CardDetails>
      <CardDetails>
        <CardBoldSubHeading>{content.labels.launch}:</CardBoldSubHeading>
        <CardSubHeading>{content.sLaunch}</CardSubHeading>
      </CardDetails>
      <CardDetails>
        <CardBoldSubHeading>{content.labels.land}:</CardBoldSubHeading>
        <CardSubHeading>{content.sLand}</CardSubHeading>
      </CardDetails>
    </CardContent>
  </CardWrapper>
);

// Default export
export default Card;

// Default props
Card.defaultProps = {
  content: {
    alt: '',
    src: '',
    labels: {},
    missionName: '',
    missionIds: [],
    year: '',
    sLaunch: '',
    sLand: '',
  },
};

// Prop types
Card.propTypes = {
  content: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    labels: PropTypes.any.isRequired,
    missionName: PropTypes.string.isRequired,
    missionIds: PropTypes.any.isRequired,
    year: PropTypes.string.isRequired,
    sLaunch: PropTypes.string.isRequired,
    sLand: PropTypes.string.isRequired,
  }),
};
