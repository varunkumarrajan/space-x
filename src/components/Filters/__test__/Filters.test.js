// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

// Labels
import labels from 'config/Labels';
// Config
import config from 'config/Config';

import Filters from './../Filters';

// Destructuring
const {
  filterDetails,
  filterTypes,
} = config;

// Mock data
const filtersMock = {
  title: labels.filters.title,
  filterDetails,
  filterTypes,
  filters: filterTypes,
}

const handleFilter = () => {}

afterEach(cleanup);

describe('Filters', () => {
  it('Should Render Filters With Props', () => {
    const { container } = render(<Filters content={filtersMock} handleFilter={handleFilter} />);
    expect(container.children).not.toHaveLength(0);
  });

  it('Filters Snapshot', () => {
    const filters = renderer.create(<Filters content={filtersMock} handleFilter={handleFilter} />).toJSON();
    expect(filters).toMatchSnapshot();
  });
});
