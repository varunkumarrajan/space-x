// React
import React from 'react';
// Testing library
import {  cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Dashboard from './../Dashboard';

afterEach(cleanup);

describe('Dashboard', () => {

  it('Dashboard Snapshot', () => {
    const dashboard = renderer.create(<Dashboard />).toJSON();
    expect(dashboard).toMatchSnapshot();
  });
});
