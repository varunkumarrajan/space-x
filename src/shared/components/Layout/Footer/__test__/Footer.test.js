// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Footer from './../Footer';

// Mock data
const footerMock = {
    title: 'test',
    name: 'testing'
}

afterEach(cleanup);

describe('Footer', () => {
  it('Should Render Footer with props', () => {
    const { getByTestId } = render(<Footer content={footerMock} />);
    const footerId = getByTestId('footerId');
    const footerChildId = getByTestId('footerChildId');
    expect(footerId.children).not.toHaveLength(0);
    expect(footerId.className).toBeTruthy();
    expect(footerChildId.className).toBeTruthy();
  });

  it('Should footer Snapshot', () => {
    const footer = renderer.create(<Footer content={footerMock} />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
