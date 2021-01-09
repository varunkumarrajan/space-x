// Labels
import labels from './Labels';

// Destructuring
const { filters } = labels;

// Config
const config = {
  launchSuccess: (launch) => (launch ? `&launch_success=${launch}` : ``),
  landSuccess: (land) => (land ? `&land_success=${land}` : ``),
  launchYear: (year) => (year ? `&launch_year=${year}` : ``),
  apiURL: {
    launchQuery: (launch, land, year) =>
      `launches?limit=100${config.launchSuccess(launch)}${config.landSuccess(
        land
      )}${config.launchYear(year)}`,
  },
  filterTypes: [
    { key: 'years', title: filters.year, value: '', multi: true },
    { key: 'launch', title: filters.launch, value: '', multi: false },
    { key: 'land', title: filters.land, value: '', multi: false },
  ],
  filterDetails: {
    years: [
      { key: '2006', value: '2006' },
      { key: '2007', value: '2007' },
      { key: '2008', value: '2008' },
      { key: '2009', value: '2009' },
      { key: '2010', value: '2010' },
      { key: '2011', value: '2011' },
      { key: '2012', value: '2012' },
      { key: '2013', value: '2013' },
      { key: '2014', value: '2014' },
      { key: '2015', value: '2015' },
      { key: '2016', value: '2016' },
      { key: '2017', value: '2017' },
      { key: '2018', value: '2018' },
      { key: '2019', value: '2019' },
      { key: '2020', value: '2020' },
    ],
    launch: [
      { key: 'true', value: 'True' },
      { key: 'false', value: 'False' },
    ],
    land: [
      { key: 'true', value: 'True' },
      { key: 'false', value: 'False' },
    ],
  },
};

// Default config
export default config;
