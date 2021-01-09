// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import Layout from './../Layout';

// Mock data
const layoutMock = {
  children: '',
  content: {
    header: {},
    footer: {},
  },
}

afterEach(cleanup);

describe('Layout', () => {
  it('Should Render Layout with props', () => {
    const { container, getByTestId } = render(<Layout content={layoutMock} />); 
    const {className} = getByTestId('mainId');
    expect(className).toBeTruthy();
    expect(container.children).not.toHaveLength(0);
  });

  it('Should Layout Snapshot', () => {
    const layout = renderer.create(<Layout content={layoutMock} />).toJSON();
    expect(layout).toMatchSnapshot();
  });
});
