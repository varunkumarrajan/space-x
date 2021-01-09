// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Card from './../Card';

// Mock data
const cardMock = {
  alt: 'testing',
  src: 'testing.png',
  labels: {},
  missionName: 'testing',
  missionIds: [],
  year: '2021',
  sLaunch: 'true',
  sLand: 'true',
}

afterEach(cleanup);

describe('Card', () => {
  it('Should Render Card With Props', () => {
    const { container } = render(<Card content={cardMock} />);
    expect(container.children).not.toHaveLength(0);
  });

  it('Card Snapshot', () => {
    const card = renderer.create(<Card content={cardMock} />).toJSON();
    expect(card).toMatchSnapshot();
  });
});
