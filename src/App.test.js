// React
import React from 'react';
// Testing library
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
// Component
import App from './App';

afterEach(cleanup);

describe('App', () => {
  it('Should render component', () => {
    const {container} = render(<App />);
    expect(container.children).not.toHaveLength(0)
});
  it('App Snapshot', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  });
});