// React
import React from 'react';
// Testing library
import { render, cleanup, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Header from './../Header';

// Mock data
const headerMock = {
    heading: 'testing'
}

afterEach(cleanup);

describe('Header', () => {
  it('Should Render Header with props', () => {
    const { getByTestId } = render(<Header content={headerMock} />);
    const headerId = getByTestId('headerId');
    expect(headerId.className).toBeTruthy();
    const element = screen.getByText(/testing/i);
    expect(element).toBeInTheDocument();
  });

  it('Should Header Snapshot', () => {
    const header = renderer.create(<Header content={headerMock} />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
