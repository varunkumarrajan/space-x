// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';
// Components
import Button from 'components/Button/Button';

// Styled container
const Container = styled.div`
  flex: 0 0 260px;
`;

// Styled filter wrapper
const FiltersWrapper = styled.section`
  background-color: #ffffff;
  margin: 10px;
  padding: 10px;
  height: fit-content;
`;

// Styled main heading
const MainHeading = styled.h4`
  font-weight: bolder;
  font-size: 20px;
`;

// Styled subheading
const SubHeading = styled.div`
  text-align: center;
  border-bottom: 1px solid #ddd;
  margin: 0 20px;
`;

// Styled divider
const Divider = styled.div`
  margin: 5px 0;
`;

/**
 * @description Filters Element
 * @param {object} { content, handleFilter}
 */
const Filters = ({ content, handleFilter }) => {
  /**
   * @description Update filter values with the existing filter values
   * @param {string} filterKey
   * @param {string} filterType
   */
  const handleFilterTypes = (filterKey, filterType) => {
    // Put the filter key into new variable
    let updatedFilter = filterKey;
    // Loop over the filters
    content.filters.forEach((filter) => {
      // check filter type (ex: year)
      if (filter.key === filterType) {
        // check multiple selection
        if (filter.multi) {
          // check & update the filter variable
          updatedFilter = filter?.value
            ? filter.value.split(',').includes(filterKey)
              ? filter.value
                  .split(',')
                  .filter((f) => f !== filterKey)
                  .join(',')
              : `${filter.value},${filterKey}`
            : `${filterKey}`;
        }
      }
    });
    // call the callback
    handleFilter(updatedFilter, filterType);
  };

  // return filter component (html)
  return (
    <Container>
      <FiltersWrapper>
        <MainHeading>{content.title}</MainHeading>
        {content.filterTypes.map((filterType, ind) => (
          <React.Fragment key={ind}>
            <SubHeading>{filterType.title}</SubHeading>
            <Divider>
              {content.filterDetails[filterType.key].map((filter, i) => (
                <Button
                  key={i}
                  handleButtonClick={handleFilterTypes}
                  button={{
                    ...filter,
                    type: filterType.key,
                    defaultValue: content.filters.filter(
                      (f) => f.key === filterType.key
                    )[0].value,
                  }}
                />
              ))}
            </Divider>
          </React.Fragment>
        ))}
      </FiltersWrapper>
    </Container>
  );
};

// Default export
export default Filters;

// Default props
Filters.defaultProps = {
  content: {},
  handleFilter: () => {},
};

// Prop types
Filters.propTypes = {
  content: PropTypes.any.isRequired,
  handleFilter: PropTypes.func.isRequired,
};
