// React
import React from 'react';
import 'react-block-ui/style.css';
// Labels
import labels from 'config/Labels';
// Axios config
import axiosConfig from 'config/Axios.config';
// Config
import config from 'config/Config';
// Constant
import constant from 'constant/Constant';
// Components
import Filters from 'components/Filters/Filters';
import Cards from 'components/Cards/Cards';

// Destructuring
const { noContent } = labels;
const {
  apiURL: { launchQuery },
  filterDetails,
  filterTypes,
} = config;
const { ERROR_CONTENT, DELAY } = constant;

/**
 * @description Add filters & content component and view the dashboard
 */
const Dashboard = () => {
  // Local states
  const [launchDetails, setLaunchDetails] = React.useState([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [filters, setFilters] = React.useState(
    JSON.parse(JSON.stringify(filterTypes))
  );

  // Call api on the first time
  React.useEffect(() => {
    // Call the api
    handleApiCall();
  }, []);

  // Call api when filters update
  React.useEffect(() => {
    // Call the api
    handleApiCall(...[...filters.map((filter) => filter.value)]);
  }, [filters]);

  /**
   * @description set the error message into error state
   * @param {string} error
   */
  const handleError = (error) => {
    // Set Error
    setError(error);
    // Put timeout for clear the error
    setTimeout(() => setError(''), DELAY);
    // Stop Loading
    setLoading(false);
  };

  /**
   * @description call the api
   * @param {string} [launch='']
   * @param {string} [land='']
   * @param {string} [year='']
   */
  const handleApiCall = (year = '', launch = '', land = '') => {
    // Start Loading
    setLoading(true);
    try {
      // Hit http call throw axios
      axiosConfig.get(launchQuery(launch, land, year)).then((lDetails) => {
        // Check data present and it's type of array
        if (lDetails?.data && Array.isArray(lDetails?.data)) {
          // Update the launch details state
          setLaunchDetails(lDetails.data);
          // Stop Loading
          setLoading(false);
        } else {
          // Set Error
          handleError(ERROR_CONTENT);
        }
      });
    } catch (e) {
      // Set Error
      handleError(e.toString());
    }
  };

  /**
   * @description update the filter values
   * @param {string} filter
   * @param {string} filterType
   */
  const handleFilter = (filter, filterType) =>
    setFilters(
      JSON.parse(JSON.stringify(filters)).map((f) =>
        f.key === filterType ? { ...f, value: filter } : f
      )
    );

  // Return html
  return (
    <React.Fragment>
      {error && <h4>{error}</h4>}
      <Filters
        content={{
          title: labels.filters.title,
          filterDetails,
          filterTypes,
          filters,
        }}
        handleFilter={handleFilter}
      />
      <Cards
        content={{
          loading,
          launchDetails,
          labels: labels.filters,
          noContent,
        }}
      />
    </React.Fragment>
  );
};

// Default dashboard
export default Dashboard;
