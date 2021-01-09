// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Image from './../Image';

// Mock data
const imageMock = {
    alt: 'testing',
    src: 'testing.png'
}

afterEach(cleanup);

describe('Image', () => {
it('Should Render Image With Props', () => {
    const { getByAltText } = render(<Image content={imageMock} />);
    const image = getByAltText('testing');
    expect(image.className).not.toBeFalsy();
    expect(image.title).toContain('testing');
    expect(image.src).toContain('testing.png');
  });

  it('App Snapshot', () => {
    const image = renderer.create(<Image content={imageMock} />).toJSON();
    expect(image).toMatchSnapshot();
  });
});
