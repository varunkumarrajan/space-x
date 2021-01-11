// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';
// Loader
import BlockUi from 'react-block-ui';
// Components
import Card from 'components/Card/Card';

// Styled card wrapper
const CardsWrapper = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  flex: 0 0 calc(100% - 280px);
`;

// Styled heading wrapper
const HeadingWrapper = styled.h2`
  margin: 10px;
`;

/**
 * @description cards component return the array of card
 * @param {object} { content }
 */
const Cards = ({ content }) => (
  <BlockUi tag='div' blocking={content.loading}>
    <CardsWrapper>
      {content.launchDetails.length > 0 ? (
        content.launchDetails.map((lan, ind) => (
          <Card
            key={ind}
            content={{
              labels: content.labels,
              alt: lan?.details ?? '',
              src: lan?.links?.mission_patch ?? '',
              missionName: `${lan.mission_name} # ${lan.flight_number}`,
              missionIds: lan.mission_id,
              year: lan.launch_year,
              sLaunch: lan?.launch_success?.toString() ?? '',
              sLand: lan?.launch_landing?.toString() ?? '',
            }}
          />
        ))
      ) : (
        <React.Fragment>
          {!content.loading && (
            <HeadingWrapper>{content.noContent}</HeadingWrapper>
          )}
        </React.Fragment>
      )}
    </CardsWrapper>
  </BlockUi>
);

// Default export
export default Cards;

// Default props
Cards.defaultProps = {
  content: {
    noContent: '',
    labels: {},
    loading: false,
    launchDetails: [],
  },
};

// Prop types
Cards.propTypes = {
  content: PropTypes.shape({
    noContent: PropTypes.string.isRequired,
    labels: PropTypes.any.isRequired,
    loading: PropTypes.bool.isRequired,
    launchDetails: PropTypes.arrayOf(PropTypes.any).isRequired,
  }).isRequired,
};
