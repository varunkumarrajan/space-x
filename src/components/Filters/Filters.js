// React
import React from 'react';
// Prop types
import PropTypes from 'prop-types'; // ES6
// Styled component
import styled from 'styled-components';
// Components
import Button from 'components/Button/Button';
// Device
import device from 'config/BreakPoints';
// Constant
import constant from 'constant/Constant';

// Destructuring
const { LATENCY } = constant;

// Styled container
const Container = styled.div`
  flex: 0 0 260px;
  @media screen and ${device.mobile} {
    flex: 0 0 100%;
  }
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
  @media screen and ${device.mobile} {
    text-align: center;
  }
`;

/**
 * @description Filters Element
 * @param {object} { content, handleFilter}
 */
const Filters = ({ content, handleFilter }) => {
  // Local state
  const [event, setEvent] = React.useState({click: 0, filterKey: '', filterType: ''});

  // Update check click & double click
  React.useEffect(() => {
    let timer;
    if (event.click === 1) {
      timer = setTimeout(
        () => {
          handleFilters();
          setEvent({...event, click: 0});
        }, LATENCY);
    } else if (event.click === 2) {
      handleFilters(true);
      setEvent({...event, click: 0});
    }
    return () => clearTimeout(timer);
  }, [event.click]);

  /**
   * @description handle click
   * @param {string} filterKey
   * @param {string} filterType
   */
  const handleClick = (filterKey, filterType) => setEvent({filterKey, filterType, click: 1})

  /**
   * @description handle double click
   * @param {string} filterKey
   * @param {string} filterType
   */
  const handleDoubleClick = (filterKey, filterType) => setEvent({filterKey, filterType, click: 2});

  /**
   * @description
   * @param {boolean} [isCheck=false]
   */
  const handleFilters = (isCheck = false) => {
    // get key
    let updatedFilter = event.filterKey;
    // check update filter or not
    if (isCheck)
      // Loop over the filters
      content.filters.forEach((filter) => {
        // check filter type (ex: year)
        if (filter.key === event.filterType) {
          // update filter with blank
          updatedFilter = '';
        }
      });
    // call the callback
    handleFilter(
      content.filters.map((f) =>
        f.key === event.filterType ? { ...f, value: updatedFilter } : f
      )
    );
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
                  handleButtonClick={handleClick}
                  handleButtonDoubleClick={handleDoubleClick}
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
