// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Cards from './../Cards';

// Mock data
const cardsMock = {
  noContent: 'testing',
  labels: {},
  loading: false,
  launchDetails: [],
}

afterEach(cleanup);

describe('Cards', () => {
  it('Should Render Cards With Props', () => {
    const { container } = render(<Cards content={cardsMock} />);
    expect(container.children).not.toHaveLength(0);
  });

  it('Cards Snapshot', () => {
    const cards = renderer.create(<Cards content={cardsMock} />).toJSON();
    expect(cards).toMatchSnapshot();
  });
});
